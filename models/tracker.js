const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const date = new Date();
const todaysDate = `${
  date.getMonth() + 1
} ${date.getDate()} ${date.getFullYear()}`;
const trackerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },

 
  bathroomAM: [
    {n: {
        type: String,
        default:"1",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},
      {n: {
        type: String,
        default:"2",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},
      {n: {
        type: String,
        default:"3",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},
      {n: {
        type: String,
        default:"4",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},
      {n: {
        type: String,
        default:"5",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},
      {n: {
        type: String,
        default:"6",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},
      {n: {
        type: String,
        default:"7",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},
      {n: {
        type: String,
        default:"8",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},
      {n: {
        type: String,
        default:"9",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},
      {n: {
        type: String,
        default:"10",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},
      {n: {
        type: String,
        default:"11",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},
      {n: {
        type: String,
        default:"12",
        required:true        
      },
      selected: {
        type:Boolean,
        default:false        
      }},


  ],

  bathroomPM: [ {n: {
    type: String,
    default:"1",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"2",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"3",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"4",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"5",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"6",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"7",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"8",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"9",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"10",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"11",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"12",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }}],
  treatsAM: [ {n: {
    type: String,
    default:"1",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"2",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"3",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"4",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"5",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"6",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"7",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"8",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"9",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"10",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"11",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"12",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }}],

  treatsPM: [ {n: {
    type: String,
    default:"1",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"2",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"3",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"4",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"5",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"6",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"7",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"8",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"9",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"10",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"11",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }},
  {n: {
    type: String,
    default:"12",
    required:true        
  },
  selected: {
    type:Boolean,
    default:false        
  }}],
  food: {
    morning: { type: Boolean },
    lunch: { type: Boolean, default: false },
    dinner: { type: Boolean },
  },
  medical: {
    medicineName: { type: String },
    lastMedicineDate: { type: Date },
    nextVetApt: { type: Date },
  },
  groomed: { type: String },
  date: { type: String, default: todaysDate },
});

module.exports = mongoose.model("Tracker", trackerSchema);
