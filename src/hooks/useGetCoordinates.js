import useState from 'react'

const useGetCoordinates = () => {

    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude((position.coords.latitude).toFixed(1));
        setLongitude((position.coords.longitude).toFixed(1));
  
        console.log("COORDENADAS OBTIDAS");
      })


      



  return [latitude,longitude] 
}

export default useGetCoordinates