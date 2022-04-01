import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YMaps, Map } from "react-yandex-maps";
import style from "./Maps.module.css";

import {
  addPlacemark,
  addPlacemarkCity,
} from "../../../store/placemarks/actions";
import { getPlacemarks } from "../../../store/placemarks/selectors";
import { getPoints } from "../../../store/point/selectors";
import { getPoint } from "../../../store/point/selectors";
import { getCities, getCity } from "../../../store/city/selectors";

export const Maps = () => {
  let map: any;

  const state = { width: "100%", height: "350px" };
  const dispatch = useDispatch();
  const cities = useSelector(getCities);
  const city = useSelector(getCity);
  const points = useSelector(getPoints);
  const point = useSelector(getPoint);
  const placemarks = useSelector(getPlacemarks);

  const [bound, setBound] = useState([
    [54.726283, 55.942566],
    [54.731035, 55.950777],
  ]);

  useEffect(() => {
    placemarks.forEach((el: any) => {
      if (
        `${city.replace(/\s+/g, "")},${point.replace(/\s+/g, "")}` ===
        el.address
      ) {
        setBound(el.bounds);
      }
    });
  }, [point]);

  useEffect(() => {
    placemarks.forEach((el: any) => {
      if (`${city.replace(/\s+/g, "")}` === el.city) {
        setBound(el.bounds);
      }
    });
  }, [city]);

  const geocoderCity = (ymaps: any, map: any, city: string) => {
    ymaps
      .geocode(city, {
        results: 1,
      })
      .then((res: any) => {
        try {
          if (!res && !res.geoObjects.length)
            throw new Error("Что-то пошло не так...");
          let firstGeoObject = res.geoObjects.get(0);
          let coordinates = firstGeoObject.geometry.getCoordinates();
          let bounds = firstGeoObject.properties.get("boundedBy");
          let placemark = new ymaps.Placemark(coordinates);
          placemark.events.add("click", () => {
            setBound(bounds);
          });
          dispatch(addPlacemarkCity(city, bounds));
          map.geoObjects.add(res.geoObjects);
        } catch (error: any) {
          console.log(error.message);
        }
      });
  };

  const geocoder = (ymaps: any, map: any, address: string) => {
    ymaps
      .geocode(address, {
        results: 1,
      })
      .then((res: any) => {
        try {
          if (!res && !res.geoObjects.length)
            throw new Error("Что-то пошло не так...");
          let firstGeoObject = res.geoObjects.get(0);
          let coordinates = firstGeoObject.geometry.getCoordinates();
          let bounds = firstGeoObject.properties.get("boundedBy");
          let placemark = new ymaps.Placemark(coordinates);
          placemark.events.add("click", () => {
            setBound(bounds);
          });
          dispatch(addPlacemark(address, bounds));
          map.geoObjects.add(res.geoObjects);
        } catch (error: any) {
          console.log(error.message);
        }
      });
  };

  const init = (ymaps: any, map: any) => {
    cities.forEach((el) => {
      geocoderCity(ymaps, map, `${el.name.replace(/\s+/g, "")}`);
    });
    points.forEach((el) => {
      geocoder(
        ymaps,
        map,
        `${el?.cityId?.name.replace(/\s+/g, "")},${el.address.replace(
          /\s+/g,
          ""
        )}`
      );
    });
  };

  return (
    <section className={style.section}>
      <p className={style.textPointer}>Выберите на карте:</p>
      <article className={style.maps}>
        <YMaps
          style={{ width: "100%", heigth: "100%" }}
          query={{
            ns: "use-load-option",
            apikey: "55b4899b-8334-462b-ab91-21cacd078ffb",
            load: "package.full",
          }}
        >
          <Map
            modules={["geocode", "geolocation"]}
            height={state.height}
            width={state.width}
            state={{ bounds: bound }}
            onLoad={(ymaps) => {
              ymaps.ready(() => {
                init(ymaps, map);
              });
            }}
            instanceRef={(yandexMap: any) => {
              if (yandexMap) {
                map = yandexMap;
              }
            }}
          ></Map>
        </YMaps>
      </article>
    </section>
  );
};
