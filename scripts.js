//scripts.js 
function Phone(brand, price, color, system, ram) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system = system;
	this.ram = ram;
}
Phone.prototype.printInfo = function () {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " . " + " Operating system is " + this.system + "and phone has " + this.ram + "RAM");
}

var SamsungGalaxyS6 = new Phone("Samsung", 1950, "black", "Android 5.1.1", "3GB");
var iPhoneS6 = new Phone("Apple", 2100, "silver", "iOS 8.0", "1GB");
var OnePlusOne = new Phone("One Plus" 2300, "white", "Android 4.4 KitKat", "3GB");

SamsungGalaxyS6.printInfo();
iPhoneS6.printInfo();
OnePlusOne.printInfo();