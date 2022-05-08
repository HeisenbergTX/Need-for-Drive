import { useDispatch, useSelector } from "react-redux";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import style from "./Maps.module.css";

import {
  addPlacemark,
  addPlacemarkActive,
  addPlacemarkCity,
} from "../../../store/placemarks/actions";
import {
  getPlacemarkActive,
  getPlacemarkCities,
  getPlacemarkPoints,
} from "../../../store/placemarks/selectors";
import { getPoints } from "../../../store/point/selectors";
import { getPoint } from "../../../store/point/selectors";
import { getCity } from "../../../store/city/selectors";
import { useEffect, useState } from "react";
import { SelectedAddressCity } from "../../../store/city/actions";
import { SelectedAddressPoint } from "../../../store/point/actions";

export const Maps = () => {
  let map: any;

  const state = { width: "100%", height: "350px" };
  const dispatch = useDispatch();
  const city = useSelector(getCity);
  const points = useSelector(getPoints);
  const point = useSelector(getPoint);
  const placemarkCities = useSelector(getPlacemarkCities);
  const placemarkPoints = useSelector(getPlacemarkPoints);
  const placemarkActive = useSelector(getPlacemarkActive);
  const [ymaps, setYmaps] = useState<any>(null);

  useEffect(() => {
    if (city && ymaps) {
      ymaps.geocode(city, { result: 1 }).then((res: any) => {
        let placemarkActive = res.geoObjects.get(0).geometry.getCoordinates();
        dispatch(addPlacemarkActive(placemarkActive));
      });
    }
  }, [city]);

  useEffect(() => {
    if (point && city && ymaps) {
      ymaps.geocode(`${city}, ${point}`, { result: 1 }).then((res: any) => {
        let placemarkActive = res.geoObjects.get(0).geometry.getCoordinates();
        dispatch(addPlacemarkActive(placemarkActive));
      });
    }
  }, [point]);

  const geocoderCity = (ymaps: any, map: any, city: string) => {
    ymaps
      .geocode(city, {
        results: 1,
      })
      .then((res: any) => {
        try {
          if (!res && !res.geoObjects.length)
            throw new Error("Что-то пошло не так...");
          let coordinates = res.geoObjects.get(0).geometry.getCoordinates();
          dispatch(addPlacemarkCity(coordinates));
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
          let coordinates = res.geoObjects.get(0).geometry.getCoordinates();
          dispatch(addPlacemark(coordinates));
        } catch (error: any) {
          console.log(error.message);
        }
      });
  };

  const pointHandler = (placemark: number[]) => {
    ymaps.geocode(placemark).then((res: any) => {
      const city = res.geoObjects
        .get(0)
        .properties.get("description")
        .split(", ")[1];
      const point = res.geoObjects.get(0).properties.get("name");
      dispatch(SelectedAddressCity(city));
      dispatch(SelectedAddressPoint(point));
    });
  };

  const cityHandler = (placemark: number[]) => {
    ymaps.geocode(placemark).then((res: any) => {
      const city = res.geoObjects
        .get(0)
        .properties.get("description")
        .split(", ")[1];
      dispatch(SelectedAddressCity(city));
    });
  };

  const init = (ymaps: any, map: any) => {
    points.forEach((el) => {
      geocoderCity(ymaps, map, `${el?.cityId?.name.replace(/\s+/g, "")}`);
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
            apikey: `${process.env.REACT_APP_API_KEY_MAP}`,
            load: "package.full",
          }}
        >
          <Map
            modules={["geocode"]}
            height={state.height}
            width={state.width}
            state={{
              center: placemarkActive.coordinates || [54.31228, 48.395406],
              zoom: 13,
            }}
            onLoad={(ymaps) => {
              ymaps.ready(() => {
                setYmaps(ymaps);
                init(ymaps, map);
              });
            }}
          >
            {!!placemarkCities.length &&
              placemarkCities.map((placemark: any, index: number) => {
                return (
                  <Placemark
                    options={{ preset: "islands#greenCircleDotIcon" }}
                    geometry={placemark.coordinates}
                    onClick={() => cityHandler(placemark.coordinates)}
                    key={index}
                  />
                );
              })}
            {!!placemarkPoints.length &&
              placemarkPoints.map((placemark: any, index: number) => {
                return (
                  <Placemark
                    options={{ preset: "islands#greenCircleDotIcon" }}
                    geometry={placemark.coordinates}
                    onClick={() => pointHandler(placemark.coordinates)}
                    key={index}
                  />
                );
              })}
          </Map>
        </YMaps>
      </article>
    </section>
  );
};
