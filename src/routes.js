import { createAppContainer   } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main'
import Science from './pages/Science'
import Technology from './pages/Technology'



const Routes = createAppContainer (
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions: {
                title: 'Avaliação React Native Compasso NYT'
            }
        },
        Science: {
            screen: Science,
            navigationOptions: {
                title: 'Noticias sobre Ciêncas'
            },
        },
        Technology: {
            screen: Technology,
            navigationOptions: {
                title: 'Noticia sobre Tecnologias'
            }
        }
    })
);

export default Routes