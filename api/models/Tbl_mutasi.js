/**
 * Tbl_mutasi.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    tgl_mutasi:{
      type:"string",
      required:true
    },
    mutasi_dari:{
      type:"string",
      required:true
    },
    mutasi_ke:{
      type:"string",
      required:true
    },
    nama_produk:{
      type:"string"
    },
    satuan:{
      type:"string"
    },
    jml_mutasi:{
      type:"string"
    }

  },

};

