// Progression 1 SmartPhone

class SmartPhone {
  constructor(ram,batteryPower,price){
    this.ram = ram;
    this.batteryPower = batteryPower;
    this.price=price;
  }

  displayFeatures(){
    let feature = this.ram +'\n'+this.batteryPower+'\n'+this.price;
    return feature;
  }
  remainingAmount(priceIHave){
    this.price = this.price - priceIHave;
  }
}

// Progression 2 AndroidPhone

class AndroidPhone extends SmartPhone {

  constructor(modelName,ram, batteryPower, price){
    super(ram, batteryPower, price)
    this.modelName=modelName
  }

  displayFeatures(){
    return this.modelName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
    }

    remainingAmount(priceIhave){
      this.price = priceIhave - this.price;
      if(this.price <= 0){
        return'Customer has no more amount';
      }
      else{
        return 'Customer has remaining Rs.'+this.price +' after buying the android phone';
      }
    }

}

// Progression 3 IPhone

class IPhone extends SmartPhone {
  constructor(seriesName,ram, batteryPower, price){
    super(ram, batteryPower, price)
    this.seriesName = seriesName
  }

  displayFeatures(){
    let features = this.seriesName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
    return features;
    }

    remainingAmount(priceIHave){
      let initialPrice = this.price;
      this.price = priceIHave - this.price;
      if(initialPrice > priceIHave){
        return "Customer can't able to buy a phone due to insufficient amount";
      }
      else if(this.price <= 0){
        return "Customer has no more amount"
      }
      else{
        return 'Customer has remaining Rs.'+this.price +' after buying an iphone';
      }
    }
}

// Progression 4  Progression 1 MobileCampus

class MobileCampus {
  constructor (NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles){
    this.NoOfMobiles = NoOfMobiles;
    this.NoOfAndroidMobiles = NoOfAndroidMobiles;
    this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
  }

  changeMobileAvailabilityNumber(count, type){
    this.NoOfMobiles = this.NoOfMobiles - count;
    if(type === "android"){
      this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
      return `Available android mobiles are ${this.NoOfAndroidMobiles}`;
    }
    else if(type === "iphone"){
      this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
      return `Available iphone mobiles are ${this.NoOfIPhoneMobiles}`;
  }
  }
}
 