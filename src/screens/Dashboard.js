import React from 'react';
import { View, Text, ImageBackground, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { SIZES, COLORS, images } from '../constant';

function Dashboard() {
  const listAppointment = [
    {
      id: 1,
      doctors: 'Dr. Manish Mehta',
      specialis: 'Nephrologist',
      image: 'https://placeimg.com/32/32/people',
      openTime: 'Friday, 08:00 - 09:00 AM'
    },
    {
      id: 2,
      doctors: 'Dr. Benny Spanbouer',
      specialis: 'Neurology',
      image: 'https://placeimg.com/32/32/people',
      openTime: 'Friday, 08:00 - 09:00 AM'
    },
    {
      id: 3,
      doctors: 'Dr. Jhon Due',
      specialis: 'Nephrologist',
      image: 'https://placeimg.com/32/32/people',
      openTime: 'Friday, 08:00 - 09:00 AM'
    },
  ];

  const listNearby = [
    {
      id: 1,
      doctors: 'Merrill Kervin',
      specialis: 'Gastroenterologist',
      image: 'https://placeimg.com/32/32/people',
      distance: '100 m',
    },
    {
      id: 2,
      doctors: 'Geoffrey Mott',
      specialis: 'Gastroenterologist',
      image: 'https://placeimg.com/32/32/people',
      distance: '1.3 Km',
    },
    {
      id: 3,
      doctors: 'Willard Purnell',
      specialis: 'Gastroenterologist',
      image: 'https://placeimg.com/32/32/people',
      distance: '500 m',
    },
    {
      id: 4,
      doctors: 'Jhon Doe',
      specialis: 'Gastroenterologist',
      image: 'https://placeimg.com/32/32/people',
      distance: '750 m',
    },
    {
      id: 5,
      doctors: 'Doe Jhon',
      specialis: 'Gastroenterologist',
      image: 'https://placeimg.com/32/32/people',
      distance: '4 Km',
    },
  ];

  const renderProfileNotif = () => {
    return (
      <View style={sty.wrapperProfileNotif}>
        {/* Profile */}
        <View style={sty.wrapperProfile}>
          <Image source={images.Account} resizeMode="contain" style={sty.imgProfile} />
          <View>
            <Text style={sty.textGreeting}>Good Morning</Text>
            <Text style={sty.textName}>David Mason</Text>
          </View>
        </View>

        {/* Notif */}
        <TouchableOpacity
          onPress={() => console.log('notif clicked')}
        >
          <Image source={images.Notif} resizeMode="contain" style={sty.imgNotif} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFeeling = () => {
    return (
      <View style={sty.wrapperFeeling}>
        <ImageBackground source={images.FeelingBG} resizeMode="cover" style={sty.bgFeeling} />

        <View style={sty.contentFeeling}>
          <Text style={sty.titleFeeling}>How are you feeling today?</Text>

          {/* Feeling */}
          <View style={sty.contentIconFeeling}>
            <TouchableOpacity style={sty.btnFeeling}>
              <View style={sty.wrapperIconFeeling}>
                <Image source={images.Emoji1} resizeMode="contain" style={sty.imgFeeling} />
              </View>
              <Text style={sty.textFeeling}>Relaxed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={sty.btnFeeling}>
              <View style={sty.wrapperIconFeeling}>
                <Image source={images.Emoji2} resizeMode="contain" style={sty.imgFeeling} />
              </View>
              <Text style={sty.textFeeling}>Stressed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={sty.btnFeeling}>
              <View style={sty.wrapperIconFeeling}>
                <Image source={images.Emoji3} resizeMode="contain" style={sty.imgFeeling} />
              </View>
              <Text style={sty.textFeeling}>Sick</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderItemAppointment = ({ item, index }) => {
    return (
      <View style={{
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: SIZES.padding2 * 2,
        borderRadius: SIZES.radius * 2,
        marginHorizontal: SIZES.margin,
        marginLeft: index === 0 ? SIZES.margin2 * 2 : null,
        marginRight: index === listAppointment.length - 1 ? SIZES.margin2 * 2 : null,
        flexDirection: 'column'
      }}>
        {/* Info Doctor */}
        <View style={{
          paddingBottom: SIZES.padding2,
          borderBottomWidth: 1,
          borderColor: COLORS.border,
          flexDirection: 'row',
          alignItems: 'flex-start'
        }}>
          <Image source={{ uri: item.image }} resizeMode="contain" style={{
            width: 32,
            height: 32,
            borderRadius: 4,
            marginRight: SIZES.margin,
            marginTop: 2,
          }} />
          <View style={{
            flexWrap: 'nowrap'
          }}>
            <Text style={{
              fontSize: SIZES.h4,
              fontWeight: 'bold',
              color: COLORS.primary,
            }}>{item.doctors}</Text>
            <Text style={{
              color: COLORS.secondary,
              fontSize: SIZES.body3,
              marginTop: 4,
            }}>{item.specialis}</Text>
          </View>
        </View>

        {/* Time */}
        <View style={{
          marginTop: SIZES.margin2,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Image source={images.Time} resizeMode="contain" style={{
            width: 16,
            height: 16,
            marginRight: SIZES.margin,
          }} />
          <Text style={{
            color: COLORS.primary,
            fontWeight: 'bold',
          }}>{item.openTime}</Text>
        </View>
      </View>
    );
  };

  const renderAppoinment = () => {
    return (
      <View style={sty.section}>
        <View>
          <Text style={sty.titleSection}>My Appointment</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listAppointment}
          keyExtractor={item => String(item.id)}
          renderItem={renderItemAppointment}
        />
      </View>
    );
  };

  const renderItemNearby = ({ item, index }) => {
    return (
      <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: index === listNearby.length - 1 ? null : SIZES.margin * 2,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
          <Image source={{ uri: item.image }} resizeMode="contain" style={{
            marginRight: 8,
            borderRadius: 4,
            width: 32,
            height: 32,
            marginTop: 2,
          }}/>
          <View>
            <Text style={{
              fontSize: SIZES.h4,
              fontWeight: 'bold',
              color: COLORS.primary,
            }}>{item.doctors}</Text>
            <Text style={{
              color: COLORS.secondary,
              fontSize: SIZES.body3,
              marginTop: 4,
            }}>{item.specialis}</Text>
          </View>
        </View>

        <View>
          <Text style={{
            color: COLORS.secondary,
            fontSize: SIZES.body3,
            marginTop: 4,
          }}>{item.distance}</Text>
        </View>
      </View>
    );
  };

  const renderNearbyDoctors = () => {
    return (
      <View style={sty.section}>
        <View>
          <Text style={sty.titleSection}>Nearby Doctors</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={listNearby}
          keyExtractor={item => String(item.id)}
          renderItem={renderItemNearby}
          contentContainerStyle={{
            marginHorizontal: SIZES.margin2 * 2,
            marginBottom: SIZES.margin2,
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView style={sty.container}>
      <ImageBackground source={images.DashboardBG} resizeMode="cover" style={sty.bgDashboard} />
      
      {/* Profile & Notif */}
      {renderProfileNotif()}

      {/* Feeling today */}
      {renderFeeling()}

      {/* My Appoinment */}
      {renderAppoinment()}

      {/* Nearby Doctors */}
      {renderNearbyDoctors()}
    </ScrollView>
  );
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bgDashboard: {
    position: 'absolute',
    width: '100%',
    height: 275,
  },
  wrapperProfileNotif: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight + SIZES.margin,
    marginHorizontal: SIZES.margin2 * 2,
  },
  wrapperProfile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgProfile: {
    width: 40,
    height: 40,
    marginRight: SIZES.margin,
  },
  textGreeting: {
    color: COLORS.white,
    opacity: 0.5,
    fontSize: SIZES.body4,
  },
  textName: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
  },
  imgNotif: {
    width: 24,
    height: 24,
  },
  wrapperFeeling: {
    marginTop: SIZES.margin2 * 4,
    marginBottom: SIZES.margin2 * 4,
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: SIZES.margin2 * 2,
  },
  bgFeeling: {
    width: 327, 
    height: 182,
    position: 'absolute'
  },
  contentFeeling: {
    flexDirection: 'column',
    width: 327,
    paddingHorizontal: SIZES.padding2 * 2,
    paddingVertical: SIZES.padding2 * 2,
  },
  titleFeeling: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  contentIconFeeling: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.margin2,
  },
  btnFeeling: {
    height: 48,
    marginHorizontal: SIZES.margin2,
  },
  wrapperIconFeeling: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.whiteOpacity,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgFeeling: {
    width: 28,
    height: 28,
  },
  textFeeling: {
    color: COLORS.white,
    marginTop: SIZES.margin,
    textAlign: 'center',
  },
  section: {
    flexDirection: 'column',
    marginBottom: SIZES.margin2,
  },
  titleSection: {
    fontSize: SIZES.h3,
    color: COLORS.primary,
    marginVertical: SIZES.margin2 * 2,
    paddingHorizontal: SIZES.margin2 * 2,
  }
});

export default Dashboard;