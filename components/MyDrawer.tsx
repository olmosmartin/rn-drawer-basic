import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feed } from './Feed/Feed';
import { Article } from './Article/Article';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
        initialRouteName = "Feed"
        defaultStatus= "open"
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;