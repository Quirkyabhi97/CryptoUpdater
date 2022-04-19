
import { Card, Button } from 'react-bootstrap';
import React, { useEffect,useState } from 'react';


export const Crypto = () => {
    
    const [value,setValue]= useState();

    const getCryptoData = async () => {
        try {
            const res = await fetch('https://data.messari.io/api/v1/assets');
            const actualData = await res.json();
            console.log(actualData);
            setValue(actualData);
        }
        catch (err) {
            console.log(err);

        }
    }

    useEffect(() => {
        getCryptoData();
    }, []);

    return (
        

        <React.Fragment>
            <h1>Welcome To your Daily Cryto Updater</h1>
            
            {value &&

            
                <React.Fragment>{
                    value.data.map((coin,index)=>{
                        return(
                            <Card key={index} border="primary" style={{ width: '18rem' }}>
                            <Card.Header>{coin.name}</Card.Header>
                                <Card.Body>
                                  <Card.Title>Rank           {coin.metrics.marketcap.rank}                 </Card.Title>
                                  <Card.Text>  All Time High {coin.metrics.all_time_high.price}            </Card.Text>
                                  <Card.Text>  Current Value {coin.metrics.market_data.price_usd}          </Card.Text>
                                  <Card.Text>  Symbol        {coin.symbol}                                 </Card.Text>
                                  <Card.Text>  Timestamp     {coin.metrics.market_data.last_trade_at}      </Card.Text>
                                 </Card.Body>
                            </Card>
                               )
                    })
                }
           
        

            {/* <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Ethereum</Card.Header>
                <Card.Body>
                    <Card.Title>Rank           {value.data[1].metrics.marketcap.rank}                 </Card.Title>
                    <Card.Text>  All Time High {value.data[1].metrics.all_time_high.price}            </Card.Text>
                    <Card.Text>  Current Value {value.data[1].metrics.market_data.price_usd}          </Card.Text>
                    <Card.Text>  Symbol        {value.data[1].symbol}                                 </Card.Text>
                    <Card.Text>  Timestamp     {value.data[1].metrics.market_data.last_trade_at}      </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Tether</Card.Header>
                <Card.Body>
                    <Card.Title>Rank           {value.data[2].metrics.marketcap.rank}                 </Card.Title>
                    <Card.Text>  All Time High {value.data[2].metrics.all_time_high.price}            </Card.Text>
                    <Card.Text>  Current Value {value.data[2].metrics.market_data.price_usd}          </Card.Text>
                    <Card.Text>  Symbol        {value.data[2].symbol}                                 </Card.Text>
                    <Card.Text>  Timestamp     {value.data[2].metrics.market_data.last_trade_at}      </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Cardano</Card.Header>
                <Card.Body>
                    <Card.Title>Rank           {value.data[3].metrics.marketcap.rank}                 </Card.Title>
                    <Card.Text>  All Time High {value.data[3].metrics.all_time_high.price}            </Card.Text>
                    <Card.Text>  Current Value {value.data[3].metrics.market_data.price_usd}          </Card.Text>
                    <Card.Text>  Symbol        {value.data[3].symbol}                                 </Card.Text>
                    <Card.Text>  Timestamp     {value.data[3].metrics.market_data.last_trade_at}      </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>BNB</Card.Header>
                <Card.Body>
                    <Card.Title>Rank           {value.data[4].metrics.marketcap.rank}                 </Card.Title>
                    <Card.Text>  All Time High {value.data[4].metrics.all_time_high.price}            </Card.Text>
                    <Card.Text>  Current Value {value.data[4].metrics.market_data.price_usd}          </Card.Text>
                    <Card.Text>  Symbol        {value.data[4].symbol}                                 </Card.Text>
                    <Card.Text>  Timestamp     {value.data[4].metrics.market_data.last_trade_at}      </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Solana</Card.Header>
                <Card.Body>
                    <Card.Title>Rank           {value.data[5].metrics.marketcap.rank}                 </Card.Title>
                    <Card.Text>  All Time High {value.data[5].metrics.all_time_high.price}            </Card.Text>
                    <Card.Text>  Current Value {value.data[5].metrics.market_data.price_usd}          </Card.Text>
                    <Card.Text>  Symbol        {value.data[5].symbol}                                 </Card.Text>
                    <Card.Text>  Timestamp     {value.data[5].metrics.market_data.last_trade_at}      </Card.Text>
                </Card.Body>
            </Card>
            <br />   */}
            </React.Fragment>     
        }
       

            <Button variant="Primary">Press To Update</Button>

        </React.Fragment>
    )
}

//{data.metrics.marketcap.rank}
//{value.metrics.marketcap.rank}
//{value.data[0].metrics.marketcap.rank}

