(() => {
  ymaps.ready(init)

  function init() {
    const coordinates = [48.872185073737896, 2.354223999999991]

    const options = {
      center: coordinates,
      zoom: 12,
      controls: [],
    }
    const myMap = new ymaps.Map('map',
      options,
      {
        suppressMapOpenBlock: true,
      }
    )

    const placemarkSize = [28, 40]
    const placemark = new ymaps.Placemark(coordinates, {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/map-mark.svg',
      iconImageSize: placemarkSize,
      iconImageOffset: [-(placemarkSize[0] / 2), -placemarkSize[1]]
    })

    myMap.geoObjects.add(placemark)
  }
})()
