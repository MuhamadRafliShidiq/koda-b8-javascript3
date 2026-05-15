// Buatkan Program hitung Luas dan keliling lingkaran dengan menggunakan object dan method

const lingkaran = {
    luas: function (phi, r) {
        return phi * r * r
    },
    keliling: function (phi, r) {
        return 2 * phi * r;
    },
    hitung: function (r) {
        if (typeof r !== "number") {
            console.log(error = "r must be a number");
            return
        }
        let phi
        if (r % 7 == 0) {
            phi = 22 / 7;
        } else {
            phi = 3.14;
        }
        this.keliling();
        this.luas();
        console.log("Luas Lingkaran = " + this.luas(phi, r));
        console.log("Keliling Lingkaran = " + this.keliling(phi, r));
    }
}

lingkaran.hitung(7);