import React, { Component } from 'react';
import Produk from './Produk';

class App extends Component {

  state = {
    produk: [
      { id: 1, namaProduk: 'Headset', harga: 100000, stok: 30 },
      { id: 2, namaProduk: 'MIC', harga: 450000, stok: 5 },
      { id: 3, namaProduk: 'Keyboard', harga: 30000, stok: 300 },
      { id: 4, namaProduk: 'Printer', harga: 1500000, stok: 15 },
      { id: 5, namaProduk: 'Hardisk', harga: 1700000, stok: 100 },
      { id: 6, namaProduk: 'Flashdisk', harga: 120000, stok: 40 },
      { id: 7, namaProduk: 'RAM 8 GB', harga: 800000, stok: 3 }
    ]
  }

  render() {
    return (
      <div>
        <h1>Daftar Produk</h1>
        <Produk produkProduk={this.state.produk} />
      </div>
    );
  }
}

export default App;
