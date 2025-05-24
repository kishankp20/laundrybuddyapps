import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const categories = [
  { name: 'Carpet', image: require('../../assets/carpet.png') },
  { name: 'Curtains', image: require('../../assets/curtains.png') },
  { name: 'Toys', image: require('../../assets/toys.png') }
];

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../../assets/laundrybuddy_logo.png')} style={styles.logo} />
          <View style={styles.icons}>
            <Ionicons name="notifications-outline" size={24} color="#6C63FF" style={styles.icon} />
            <Ionicons name="person-outline" size={24} color="#6C63FF" />
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#999" />
          <TextInput
            placeholder="What are you looking for?"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        {/* Browse by category */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Browse by category</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <View key={index} style={styles.categoryCard}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryLabel}>{item.name}</Text>
            </View>
          ))}
        </View>

        {/* Advertise Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Advertise Banner</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.navbar}>
        <Feather name="home" size={24} color="#6C63FF" />
        <Feather name="package" size={24} color="#6C63FF" />
        <View style={styles.activeIcon}>
          <Feather name="shopping-cart" size={24} color="#fff" />
        </View>
        <MaterialIcons name="assignment" size={24} color="#6C63FF" />
        <AntDesign name="user" size={24} color="#6C63FF" />
      </View>
    </View>
  );
};

export default HomePage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 140,
    height: 40,
    resizeMode: 'contain'
  },
  icons: {
    flexDirection: 'row',
    gap: 12
  },
  icon: {
    marginRight: 10
  },
  searchContainer: {
    marginTop: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center'
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1
  },
  sectionHeader: {
    marginTop: 24,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600'
  },
  viewAll: {
    color: '#6C63FF',
    fontSize: 14
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    marginHorizontal: 8
  },
  categoryCard: {
    alignItems: 'center',
    width: 80
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 8
  },
  categoryLabel: {
    fontSize: 14,
    textAlign: 'center'
  },
  banner: {
    margin: 16,
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bannerText: {
    fontSize: 18,
    fontWeight: '500'
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#fff',
    borderTopColor: '#eee',
    borderTopWidth: 1
  },
  activeIcon: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 30
  }
});

