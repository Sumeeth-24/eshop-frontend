import React, {useState} from 'react';
import {View, Button, TouchableOpacity} from 'react-native';
import { Container, Text, HStack, FlatList, Box, Radio, VStack, Heading, Select } from 'native-base';

const methods = [
    {name: 'Cash on Delivery', value: 1},
    {name: 'Bank Transfer', value: 2},
    {name: 'Card Payment', value: 3}
]

const paymentCards = [
    {name: 'Wallet', value: 1},
    {name: 'Visa', value: 2},
    {name: 'MasterCard', value: 3},
    {name: 'Other', value: 4}
]

const Payment = (props) => {

    const order = props.route.params;

    const [selected, setSelected] = useState();
    const [card, setCard] = useState();
  return (
    <Container>
        <VStack style={{paddingBottom: 50}}>
            <Box>
               <Heading size='sm' >Choose your payment method</Heading>
            </Box>
            {methods.map((item, index) => {
                return (
                    <TouchableOpacity key={item.name} style={{marginBottom: 30}} onPress={() => setSelected(item.value)}>
                        <HStack>
                            <Heading size='xs'>{item.name}</Heading>
                            <Radio.Group
                                selected={selected == item.value}
                                >
                            </Radio.Group>
                        </HStack>
                        

                    </TouchableOpacity>
                )
            })}
            {/* {selected == 3 ? (
                <Select
                    selectedValue={card}
                    onValueChange={(x) => setCard(x)}
                >
                  {paymentCards.map((c, index) => {
                    return <Select.Item key={c.name} label={c.name} value={c.name} />
                  })}
                </Select>
            ): null} */}
            <View style={{marginTop: 60, alignSelf: 'center'}}>
                <Button title={"Confirm"} onPress={() => props.navigation.navigate("Confirm", {order})} />
            </View>
        </VStack>
    </Container>
  )
}

export default Payment;