import React from 'react';
import { Context } from '../../App';
import { useContext } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

export default function PDFView() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#fff'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Task 1</Text>
          <Text>{userInput1}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Task 2</Text>
          <Text>{userInput2}</Text>
        </View>
      </Page>
    </Document>
  );

  const { userInput1, userInput2 } = useContext(Context);

  return (
    <div>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}
