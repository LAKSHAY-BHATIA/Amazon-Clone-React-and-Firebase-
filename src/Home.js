import React from 'react'
import './Home.css';
import Product from './Product'
function Home() {
    return (
        <div className= "home" >
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Durgamati/Launch/1500x600_Hero-Tall_np._CB415069441_.jpg" alt="banner"/>

                <div className="home__row">
                    {/* product */}
                    <Product title="Apple iPhone 11 Pro Max (512GB) - Space Grey" 
                    id="101"
                    price={699.99} image={"https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY218_.jpg"}
                    rating={4}
                    />
                    {/* product */}
                    <Product title="Dell Inspiron 17 3793, i3793-5841BLK-PUS, 10th Generation Intel Core i5-1035G1, 17.3-Inch FHD" 
                    id="102"
                    price="683.25" image={"https://m.media-amazon.com/images/I/71++jSGKTSL._AC_UY218_.jpg"}
                    rating={3}
                    />
                </div>

                <div className="home__row">
                    {/* product */}
                    {/* product */}
                     {/* product */}
                    {/* product */}
                    <Product title="MOOSOO Full-Automatic Washing Machine Portable Compact 1.38 Cu.ft Laundry Washer Spin with Drain" 
                    id="103"
                    price="288.40" image={"https://m.media-amazon.com/images/I/61P2aKW9F5L._AC_UY218_.jpg"}
                    rating={4}
                    />
                      <Product title="Wireless Over-Ear Headphones with Deep Bass, Foldable Wireless and Wired Stereo Headset Buit in Mic for Cell Phone, PC,TV, PC,Soft Earmuffs &Light Weight for Prolonged Wearing (Black/red)
" 
                    id="104"
                    price="25.99" image={"https://m.media-amazon.com/images/I/81D3aL3-CBL._AC_UY218_.jpg"}
                    rating={3}
                    />
                      <Product title="Skechers Men's Classic Fit-Delson-Camden Sneaker" 
                    id="105"
                    price="41.24" image={"https://m.media-amazon.com/images/I/71pqOp-2sfL._AC_UL320_.jpg"}
                    rating={4}
                    />
                      <Product title="the lean startup" 
                    id="108"
                    price="29.99" image={"https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"}
                    rating={4}
                    />

                </div>

                <div className="home__row">
                    {/* product */}
                    <Product title="the lean startuInsignia NS-32DF310NA19 32-inch Smart HD TV - Fire TV Edition" 
                    id="109"
                    price="99.99" image={"https://m.media-amazon.com/images/I/41VCva3xinL._AC_UY218_.jpg"}
                    rating={5}
                    />
                </div>
                 

        </div>
        </div>
    )
}

export default Home
