import { Dimensions, Image } from 'react-native';
const {width,height} = Dimensions.get('screen')

const Success = (props) => (
    <Image
      source={require('../asset/images/success.png')}
      style={{ height: height/2.5, width: width }}
    />
  );
  
  const BlackCar = (props) => (
    <Image
      source={require('../asset/images/blackcarLand.jpg')}
      style={{ height: height/3, width: width }}
    />
  );

export default {
    Success,
    BlackCar
}