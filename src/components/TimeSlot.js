import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const TimeSlotComponent = ({ onSelectTimeSlot }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Function to generate time slots
  const generateTimeSlots = () => {
    const timeSlots = [];
    const interval = 30; // 30 minutes interval

    // Start and end times
    const startTime = new Date();
    startTime.setHours(8, 0, 0); // Start time: 8:00 AM

    const endTime = new Date();
    endTime.setHours(12, 0, 0); // End time: 8:00 PM

    let currentTime = new Date(startTime);

    while (currentTime <= endTime) {
      const startTimeFormatted = currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });

      const endTimeFormatted = new Date(currentTime);
      endTimeFormatted.setMinutes(endTimeFormatted.getMinutes() + interval);

      const endTimeFormattedString = endTimeFormatted.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });

      timeSlots.push({
        startTime: startTimeFormatted,
        endTime: endTimeFormattedString,
        timestamp: currentTime.getTime(), // Optionally, you can use timestamp for further operations
      });

      currentTime.setMinutes(currentTime.getMinutes() + interval);
    }

    return timeSlots;
  };

  // Render time slots
  const renderTimeSlot = ({ item,index }) => {
    return (
      <TouchableOpacity
        style={[
          styles.timeSlot,
          { backgroundColor:  selectedSlot  === index ? '#000' : '#fff' }
        ]}
        onPress={() => {
          setSelectedSlot(index);
          onSelectTimeSlot(item);
        }}
      >
        <Text style={[styles.timeSlotText,{color:selectedSlot  === index ? '#fff' : '#000' }]}>{`${item.startTime} - ${item.endTime}`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
     <View>
      <Text style={styles.title}>Select Pickup Time Slot</Text>
     <FlatList
        data={generateTimeSlots()}
        renderItem={renderTimeSlot}
        keyExtractor={(item) => item.timestamp.toString()}
        numColumns={2}
      />
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  title:{
    fontSize: 17, fontWeight: "700",marginTop:30,color:"#000",marginBottom:10
  },
  timeSlot: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 12,
    margin: 8,
    borderRadius: 8,
    borderWidth:1,
    borderColor:"#777777"
  },
  timeSlotText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    fontWeight:"600"
  },
});

export default TimeSlotComponent;
