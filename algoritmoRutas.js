let origen, destino;
let km = 0;
let ruta = "";
let y = [

	{ origen: "REYNOSA", destino: "SAN LUIS POTOSI", km: 694, ruta: "REYNOSA a SAN LUIS POTOSI" },


	{ origen: "SAN LUIS POTOSI", destino: "REYNOSA", km: 694, ruta: "SAN LUIS POTOSI a REYNOSA" },


	{ origen: "MATAMOROS", destino: "SAN LUIS POTOSI", km: 687, ruta: "MATAMOROS a SAN LUIS POTOSI" },


	{ origen: "SAN LUIS POTOSI", destino: "MATAMOROS", km: 687, ruta: "SAN LUIS POTOSI a MATAMOROS" },


	{ origen: "MONTERREY", destino: "TAMAZUNCHALE", km: 626, ruta: "MONTERREY a TAMAZUNCHALE" },


	{ origen: "TAMAZUNCHALE", destino: "MONTERREY", km: 626, ruta: "TAMAZUNCHALE a MONTERREY" },


	{ origen: "MATLAPA", destino: "MONTERREY", km: 608, ruta: "MATLAPA a MONTERREY" },


	{ origen: "MONTERREY", destino: "MATLAPA", km: 608, ruta: "MONTERREY a MATLAPA" },


	{ origen: "COMOCA", destino: "MONTERREY", km: 593, ruta: "COMOCA a MONTERREY" },


	{ origen: "MONTERREY", destino: "COMOCA", km: 593, ruta: "MONTERREY a COMOCA" },


	{ origen: "CRUCERO DE XILITLA", destino: "MONTERREY", km: 588, ruta: "CRUCERO DE XILITLA a MONTERREY" },


	{ origen: "MONTERREY", destino: "CRUCERO DE XILITLA", km: 588, ruta: "MONTERREY a CRUCERO DE XILITLA" },


	{ origen: "HUICHIUAYAN", destino: "MONTERREY", km: 583, ruta: "HUICHIUAYAN a MONTERREY" },


	{ origen: "MONTERREY", destino: "HUICHIUAYAN", km: 583, ruta: "MONTERREY a HUICHIUAYAN" },


	{ origen: "CRUCERO DE XOLOL", destino: "MONTERREY", km: 572, ruta: "CRUCERO DE XOLOL a MONTERREY" },


	{ origen: "MONTERREY", destino: "CRUCERO DE XOLOL", km: 572, ruta: "MONTERREY a CRUCERO DE XOLOL" },


	{ origen: "CRUCERO DE AQUISMON", destino: "MONTERREY", km: 563, ruta: "CRUCERO DE AQUISMON a MONTERREY" },


	{ origen: "MONTERREY", destino: "CRUCERO DE AQUISMON", km: 563, ruta: "MONTERREY a CRUCERO DE AQUISMON" },


	{ origen: "CD. VALLES", destino: "REYNOSA", km: 560, ruta: "CD. VALLES a REYNOSA" },


	{ origen: "REYNOSA", destino: "CD. VALLES", km: 560, ruta: "REYNOSA a CD. VALLES" },


	{ origen: "MATAMOROS", destino: "EL HUIZACHE", km: 556, ruta: "MATAMOROS a EL HUIZACHE" },


	{ origen: "CD. VALLES", destino: "MATAMOROS", km: 553, ruta: "CD. VALLES a MATAMOROS" },


	{ origen: "MATAMOROS", destino: "CD. VALLES", km: 553, ruta: "MATAMOROS a CD. VALLES" },


	{ origen: "SAN LUIS POTOSI", destino: "SAN FERNANDO", km: 548, ruta: "SAN LUIS POTOSI a SAN FERNANDO" },


	{ origen: "MONTERREY", destino: "TAMPICO - MADERO", km: 525, ruta: "MONTERREY a TAMPICO - MADERO" },


	{ origen: "TAMPICO - MADERO", destino: "MONTERREY", km: 525, ruta: "TAMPICO - MADERO a MONTERREY" },


	{ origen: "TAMPICO NORTE", destino: "MONTERREY", km: 523, ruta: "TAMPICO NORTE a MONTERREY" },


	{ origen: "CD. VALLES", destino: "MONTERREY", km: 518, ruta: "CD. VALLES a MONTERREY" },


	{ origen: "MONTERREY", destino: "CD. VALLES", km: 518, ruta: "MONTERREY a CD. VALLES" },


	{ origen: "SAN FERNANDO", destino: "SAN LUIS POTOSI", km: 515, ruta: "SAN FERNANDO a SAN LUIS POTOSI" },


	{ origen: "MONTERREY", destino: "PUENTE ALTAMIRA LAS PINAS", km: 504, ruta: "MONTERREY a PUENTE ALTAMIRA LAS PINAS" },


	{ origen: "PUENTE ALTAMIRA LAS PINAS", destino: "MONTERREY", km: 504, ruta: "PUENTE ALTAMIRA LAS PINAS a MONTERREY" },


	{ origen: "LINARES", destino: "TAMAZUNCHALE", km: 498, ruta: "LINARES a TAMAZUNCHALE" },


	{ origen: "REYNOSA", destino: "TAMPICO - MADERO", km: 497, ruta: "REYNOSA a TAMPICO - MADERO" },


	{ origen: "TAMPICO - MADERO", destino: "REYNOSA", km: 497, ruta: "TAMPICO - MADERO a REYNOSA" },


	{ origen: "SAN LUIS POTOSI", destino: "TAMPICO - MADERO", km: 496, ruta: "SAN LUIS POTOSI a TAMPICO - MADERO" },


	{ origen: "TAMPICO NORTE", destino: "REYNOSA", km: 495, ruta: "TAMPICO NORTE a REYNOSA" },


	{ origen: "TAMPICO - MADERO", destino: "SAN LUIS POTOSI", km: 493, ruta: "TAMPICO - MADERO a SAN LUIS POTOSI" },


	{ origen: "ANTIGUO MORELOS", destino: "REYNOSA", km: 490, ruta: "ANTIGUO MORELOS a REYNOSA" },


	{ origen: "MATAMOROS", destino: "TAMPICO - MADERO", km: 490, ruta: "MATAMOROS a TAMPICO - MADERO" },


	{ origen: "REYNOSA", destino: "ANTIGUO MORELOS", km: 490, ruta: "REYNOSA a ANTIGUO MORELOS" },


	{ origen: "TAMPICO - MADERO", destino: "MATAMOROS", km: 490, ruta: "TAMPICO - MADERO a MATAMOROS" },


	{ origen: "ANTIGUO MORELOS", destino: "MATAMOROS", km: 483, ruta: "ANTIGUO MORELOS a MATAMOROS" },


	{ origen: "MATAMOROS", destino: "ANTIGUO MORELOS", km: 483, ruta: "MATAMOROS a ANTIGUO MORELOS" },


	{ origen: "REYNOSA", destino: "TULA CARRETERA", km: 481, ruta: "REYNOSA a TULA CARRETERA" },


	{ origen: "TULA CARRETERA", destino: "REYNOSA", km: 481, ruta: "TULA CARRETERA a REYNOSA" },


	{ origen: "PUENTE ALTAMIRA LAS PINAS", destino: "REYNOSA", km: 476, ruta: "PUENTE ALTAMIRA LAS PINAS a REYNOSA" },


	{ origen: "REYNOSA", destino: "PUENTE ALTAMIRA LAS PINAS", km: 476, ruta: "REYNOSA a PUENTE ALTAMIRA LAS PINAS" },


	{ origen: "TULA CARRETERA", destino: "MATAMOROS", km: 474, ruta: "TULA CARRETERA a MATAMOROS" },


	{ origen: "MATAMOROS", destino: "PUENTE ALTAMIRA LAS PINAS", km: 469, ruta: "MATAMOROS a PUENTE ALTAMIRA LAS PINAS" },


	{ origen: "PUENTE ALTAMIRA LAS PINAS", destino: "MATAMOROS", km: 469, ruta: "PUENTE ALTAMIRA LAS PINAS a MATAMOROS" },


	{ origen: "SAN LUIS POTOSI", destino: "JIMENEZ", km: 464, ruta: "SAN LUIS POTOSI a JIMENEZ" },


	{ origen: "CD. MANTE", destino: "REYNOSA", km: 460, ruta: "CD. MANTE a REYNOSA" },


	{ origen: "MATAMOROS", destino: "TULA CARRETERA", km: 460, ruta: "MATAMOROS a TULA CARRETERA" },


	{ origen: "REYNOSA", destino: "CD. MANTE", km: 460, ruta: "REYNOSA a CD. MANTE" },


	{ origen: "CD. MANTE", destino: "MATAMOROS", km: 453, ruta: "CD. MANTE a MATAMOROS" },


	{ origen: "MATAMOROS", destino: "CD. MANTE", km: 453, ruta: "MATAMOROS a CD. MANTE" },


	{ origen: "ESTACION MANUEL", destino: "MONTERREY", km: 448, ruta: "ESTACION MANUEL a MONTERREY" },


	{ origen: "MONTERREY", destino: "ESTACION MANUEL", km: 448, ruta: "MONTERREY a ESTACION MANUEL" },


	{ origen: "CUAUHTEMOC", destino: "REYNOSA", km: 446, ruta: "CUAUHTEMOC a REYNOSA" },


	{ origen: "REYNOSA", destino: "CUAUHTEMOC", km: 446, ruta: "REYNOSA a CUAUHTEMOC" },


	{ origen: "JIMENEZ", destino: "SAN LUIS POTOSI", km: 441, ruta: "JIMENEZ a SAN LUIS POTOSI" },


	{ origen: "ESTACION MANUEL", destino: "REYNOSA", km: 420, ruta: "ESTACION MANUEL a REYNOSA" },


	{ origen: "REYNOSA", destino: "ESTACION MANUEL", km: 420, ruta: "REYNOSA a ESTACION MANUEL" },


	{ origen: "CD. MANTE", destino: "MONTERREY", km: 418, ruta: "CD. MANTE a MONTERREY" },


	{ origen: "MONTERREY", destino: "CD. MANTE", km: 418, ruta: "MONTERREY a CD. MANTE" },


	{ origen: "ESTACION MANUEL", destino: "SAN LUIS POTOSI", km: 416, ruta: "ESTACION MANUEL a SAN LUIS POTOSI" },


	{ origen: "SAN LUIS POTOSI", destino: "ESTACION MANUEL", km: 416, ruta: "SAN LUIS POTOSI a ESTACION MANUEL" },


	{ origen: "ESTACION MANUEL", destino: "MATAMOROS", km: 413, ruta: "ESTACION MANUEL a MATAMOROS" },


	{ origen: "MATAMOROS", destino: "ESTACION MANUEL", km: 413, ruta: "MATAMOROS a ESTACION MANUEL" },


	{ origen: "SAN LUIS POTOSI", destino: "VILLA GONZALEZ", km: 399, ruta: "SAN LUIS POTOSI a VILLA GONZALEZ" },


	{ origen: "VILLA GONZALEZ", destino: "SAN LUIS POTOSI", km: 399, ruta: "VILLA GONZALEZ a SAN LUIS POTOSI" },


	{ origen: "LINARES", destino: "TAMPICO - MADERO", km: 397, ruta: "LINARES a TAMPICO - MADERO" },


	{ origen: "TAMPICO - MADERO", destino: "LINARES", km: 397, ruta: "TAMPICO - MADERO a LINARES" },


	{ origen: "JAUMAVE", destino: "MATAMOROS", km: 396, ruta: "JAUMAVE a MATAMOROS" },


	{ origen: "MATAMOROS", destino: "JAUMAVE", km: 396, ruta: "MATAMOROS a JAUMAVE" },


	{ origen: "JAUMAVE", destino: "REYNOSA", km: 392, ruta: "JAUMAVE a REYNOSA" },


	{ origen: "REYNOSA", destino: "JAUMAVE", km: 392, ruta: "REYNOSA a JAUMAVE" },


	{ origen: "PADILLA", destino: "SAN LUIS POTOSI", km: 391, ruta: "PADILLA a SAN LUIS POTOSI" },


	{ origen: "CD. VALLES", destino: "LINARES", km: 390, ruta: "CD. VALLES a LINARES" },


	{ origen: "LINARES", destino: "CD. VALLES", km: 390, ruta: "LINARES a CD. VALLES" },


	{ origen: "ALDAMA 2", destino: "REYNOSA", km: 385, ruta: "ALDAMA 2 a REYNOSA" },


	{ origen: "JAUMAVE", destino: "MATAMOROS", km: 385, ruta: "JAUMAVE a MATAMOROS" },


	{ origen: "REYNOSA", destino: "ALDAMA 2", km: 385, ruta: "REYNOSA a ALDAMA 2" },


	{ origen: "ALDAMA 2", destino: "MATAMOROS", km: 378, ruta: "ALDAMA 2 a MATAMOROS" },


	{ origen: "MATAMOROS", destino: "ALDAMA 2", km: 378, ruta: "MATAMOROS a ALDAMA 2" },


	{ origen: "CD. VICTORIA", destino: "REYNOSA", km: 374, ruta: "CD. VICTORIA a REYNOSA" },


	{ origen: "REYNOSA", destino: "CD. VICTORIA", km: 374, ruta: "REYNOSA a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "SAN LUIS POTOSI", km: 369, ruta: "CD. VICTORIA a SAN LUIS POTOSI" },


	{ origen: "SAN LUIS POTOSI", destino: "CD. VICTORIA", km: 369, ruta: "SAN LUIS POTOSI a CD. VICTORIA" },


	{ origen: "SAN FERNANDO", destino: "TAMPICO - MADERO", km: 351, ruta: "SAN FERNANDO a TAMPICO - MADERO" },


	{ origen: "TAMPICO - MADERO", destino: "SAN FERNANDO", km: 351, ruta: "TAMPICO - MADERO a SAN FERNANDO" },


	{ origen: "CD. MANTE", destino: "SAN LUIS POTOSI", km: 343, ruta: "CD. MANTE a SAN LUIS POTOSI" },


	{ origen: "CD. VICTORIA", destino: "TAMAZUNCHALE", km: 343, ruta: "CD. VICTORIA a TAMAZUNCHALE" },


	{ origen: "TAMAZUNCHALE", destino: "CD. VICTORIA", km: 343, ruta: "TAMAZUNCHALE a CD. VICTORIA" },


	{ origen: "SAN LUIS POTOSI", destino: "CD. MANTE", km: 340, ruta: "SAN LUIS POTOSI a CD. MANTE" },


	{ origen: "PUENTE ALTAMIRA LAS PINAS", destino: "SAN FERNANDO", km: 330, ruta: "PUENTE ALTAMIRA LAS PINAS a SAN FERNANDO" },


	{ origen: "SAN FERNANDO", destino: "PUENTE ALTAMIRA LAS PINAS", km: 330, ruta: "SAN FERNANDO a PUENTE ALTAMIRA LAS PINAS" },


	{ origen: "REYNOSA", destino: "PADILLA", km: 329, ruta: "REYNOSA a PADILLA" },


	{ origen: "CD. VICTORIA", destino: "REYNOSA", km: 325, ruta: "CD. VICTORIA a REYNOSA" },


	{ origen: "REYNOSA", destino: "CD. VICTORIA", km: 325, ruta: "REYNOSA a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "MATAMOROS", km: 318, ruta: "CD. VICTORIA a MATAMOROS" },


	{ origen: "MATAMOROS", destino: "CD. VICTORIA", km: 318, ruta: "MATAMOROS a CD. VICTORIA" },


	{ origen: "SAN FERNANDO", destino: "CD. MANTE", km: 314, ruta: "SAN FERNANDO a CD. MANTE" },


	{ origen: "ANTIGUO MORELOS", destino: "SAN LUIS POTOSI", km: 313, ruta: "ANTIGUO MORELOS a SAN LUIS POTOSI" },


	{ origen: "COMOCA", destino: "CD. VICTORIA", km: 310, ruta: "COMOCA a CD. VICTORIA" },


	{ origen: "SAN LUIS POTOSI", destino: "ANTIGUO MORELOS", km: 310, ruta: "SAN LUIS POTOSI a ANTIGUO MORELOS" },


	{ origen: "JAUMAVE", destino: "SAN LUIS POTOSI", km: 291, ruta: "JAUMAVE a SAN LUIS POTOSI" },


	{ origen: "SAN LUIS POTOSI", destino: "JAUMAVE", km: 291, ruta: "SAN LUIS POTOSI a JAUMAVE" },


	{ origen: "CD. MANTE", destino: "LINARES", km: 290, ruta: "CD. MANTE a LINARES" },


	{ origen: "LINARES", destino: "CD. MANTE", km: 290, ruta: "LINARES a CD. MANTE" },


	{ origen: "CD. VICTORIA", destino: "MONTERREY", km: 283, ruta: "CD. VICTORIA a MONTERREY" },


	{ origen: "MONTERREY", destino: "CD. VICTORIA", km: 283, ruta: "MONTERREY a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "VALLE HERMOSO", km: 281, ruta: "CD. VICTORIA a VALLE HERMOSO" },


	{ origen: "VALLE HERMOSO", destino: "CD. VICTORIA", km: 281, ruta: "VALLE HERMOSO a CD. VICTORIA" },


	{ origen: "EL NARANJO", destino: "SAN LUIS POTOSI", km: 280, ruta: "EL NARANJO a SAN LUIS POTOSI" },


	{ origen: "PADILLA", destino: "REYNOSA", km: 280, ruta: "PADILLA a REYNOSA" },


	{ origen: "REYNOSA", destino: "PADILLA", km: 280, ruta: "REYNOSA a PADILLA" },


	{ origen: "REYNOSA", destino: "JIMENEZ", km: 279, ruta: "REYNOSA a JIMENEZ" },


	{ origen: "SAN LUIS POTOSI", destino: "EL NARANJO", km: 277, ruta: "SAN LUIS POTOSI a EL NARANJO" },


	{ origen: "CD. VICTORIA", destino: "COMOCA", km: 275, ruta: "CD. VICTORIA a COMOCA" },


	{ origen: "ESTACION MANUEL", destino: "SAN FERNANDO", km: 274, ruta: "ESTACION MANUEL a SAN FERNANDO" },


	{ origen: "REYNOSA", destino: "SOTO LA MARINA", km: 274, ruta: "REYNOSA a SOTO LA MARINA" },


	{ origen: "SAN FERNANDO", destino: "ESTACION MANUEL", km: 274, ruta: "SAN FERNANDO a ESTACION MANUEL" },


	{ origen: "SOTO LA MARINA", destino: "REYNOSA", km: 274, ruta: "SOTO LA MARINA a REYNOSA" },


	{ origen: "MATAMOROS", destino: "PADILLA", km: 273, ruta: "MATAMOROS a PADILLA" },


	{ origen: "PADILLA", destino: "MATAMOROS", km: 273, ruta: "PADILLA a MATAMOROS" },


	{ origen: "CD. DEL MAIZ", destino: "TAMPICO - MADERO", km: 272, ruta: "CD. DEL MAIZ a TAMPICO - MADERO" },


	{ origen: "TAMPICO - MADERO", destino: "CD. DEL MAIZ", km: 272, ruta: "TAMPICO - MADERO a CD. DEL MAIZ" },


	{ origen: "SAN LUIS POTOSI", destino: "LIBRAMIENTO OCAMPO", km: 270, ruta: "SAN LUIS POTOSI a LIBRAMIENTO OCAMPO" },


	{ origen: "MATAMOROS", destino: "SOTO LA MARINA", km: 267, ruta: "MATAMOROS a SOTO LA MARINA" },


	{ origen: "SOTO LA MARINA", destino: "MATAMOROS", km: 267, ruta: "SOTO LA MARINA a MATAMOROS" },


	{ origen: "TAMPICO - MADERO", destino: "TULA CARRETERA", km: 266, ruta: "TAMPICO - MADERO a TULA CARRETERA" },


	{ origen: "TULA CARRETERA", destino: "TAMPICO - MADERO", km: 266, ruta: "TULA CARRETERA a TAMPICO - MADERO" },


	{ origen: "JAUMAVE", destino: "SAN FERNANDO", km: 257, ruta: "JAUMAVE a SAN FERNANDO" },


	{ origen: "SAN FERNANDO", destino: "JAUMAVE", km: 246, ruta: "SAN FERNANDO a JAUMAVE" },


	{ origen: "CD. VICTORIA", destino: "TAMPICO - MADERO", km: 242, ruta: "CD. VICTORIA a TAMPICO - MADERO" },


	{ origen: "TAMPICO - MADERO", destino: "CD. VICTORIA", km: 242, ruta: "TAMPICO - MADERO a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "TAMPICO NORTE", km: 240, ruta: "CD. VICTORIA a TAMPICO NORTE" },


	{ origen: "ALDAMA 2", destino: "SAN FERNANDO", km: 239, ruta: "ALDAMA 2 a SAN FERNANDO" },


	{ origen: "SAN FERNANDO", destino: "ALDAMA 2", km: 239, ruta: "SAN FERNANDO a ALDAMA 2" },


	{ origen: "CD. VALLES", destino: "CD. VICTORIA", km: 235, ruta: "CD. VALLES a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "CD. VALLES", km: 235, ruta: "CD. VICTORIA a CD. VALLES" },


	{ origen: "JIMENEZ", destino: "REYNOSA", km: 230, ruta: "JIMENEZ a REYNOSA" },


	{ origen: "REYNOSA", destino: "JIMENEZ", km: 230, ruta: "REYNOSA a JIMENEZ" },


	{ origen: "JIMENEZ", destino: "MATAMOROS", km: 223, ruta: "JIMENEZ a MATAMOROS" },


	{ origen: "MATAMOROS", destino: "JIMENEZ", km: 223, ruta: "MATAMOROS a JIMENEZ" },


	{ origen: "SOTO LA MARINA", destino: "TAMPICO - MADERO", km: 223, ruta: "SOTO LA MARINA a TAMPICO - MADERO" },


	{ origen: "TAMPICO - MADERO", destino: "SOTO LA MARINA", km: 223, ruta: "TAMPICO - MADERO a SOTO LA MARINA" },


	{ origen: "CD. DEL MAIZ", destino: "SAN LUIS POTOSI", km: 221, ruta: "CD. DEL MAIZ a SAN LUIS POTOSI" },


	{ origen: "CD. VICTORIA", destino: "PUENTE ALTAMIRA LAS PINAS", km: 221, ruta: "CD. VICTORIA a PUENTE ALTAMIRA LAS PINAS" },


	{ origen: "PUENTE ALTAMIRA LAS PINAS", destino: "CD. VICTORIA", km: 221, ruta: "PUENTE ALTAMIRA LAS PINAS a CD. VICTORIA" },


	{ origen: "SAN LUIS POTOSI", destino: "CD. DEL MAIZ", km: 221, ruta: "SAN LUIS POTOSI a CD. DEL MAIZ" },


	{ origen: "EL NARANJO", destino: "TAMPICO - MADERO", km: 216, ruta: "EL NARANJO a TAMPICO - MADERO" },


	{ origen: "TAMPICO - MADERO", destino: "EL NARANJO", km: 216, ruta: "TAMPICO - MADERO a EL NARANJO" },


	{ origen: "SAN LUIS POTOSI", destino: "TULA CARRETERA", km: 213, ruta: "SAN LUIS POTOSI a TULA CARRETERA" },


	{ origen: "TULA CARRETERA", destino: "SAN LUIS POTOSI", km: 213, ruta: "TULA CARRETERA a SAN LUIS POTOSI" },


	{ origen: "CD. MANTE", destino: "TAMAZUNCHALE", km: 208, ruta: "CD. MANTE a TAMAZUNCHALE" },


	{ origen: "TAMAZUNCHALE", destino: "CD. MANTE", km: 208, ruta: "TAMAZUNCHALE a CD. MANTE" },


	{ origen: "PUENTE ALTAMIRA LAS PINAS", destino: "SOTO LA MARINA", km: 202, ruta: "PUENTE ALTAMIRA LAS PINAS a SOTO LA MARINA" },


	{ origen: "SOTO LA MARINA", destino: "PUENTE ALTAMIRA LAS PINAS", km: 202, ruta: "SOTO LA MARINA a PUENTE ALTAMIRA LAS PINAS" },


	{ origen: "REYNOSA", destino: "SAN FERNANDO", km: 195, ruta: "REYNOSA a SAN FERNANDO" },


	{ origen: "ANTIGUO MORELOS", destino: "TAMPICO - MADERO", km: 183, ruta: "ANTIGUO MORELOS a TAMPICO - MADERO" },


	{ origen: "TAMPICO - MADERO", destino: "ANTIGUO MORELOS", km: 183, ruta: "TAMPICO - MADERO a ANTIGUO MORELOS" },


	{ origen: "CD. VICTORIA", destino: "SAN FERNANDO", km: 179, ruta: "CD. VICTORIA a SAN FERNANDO" },


	{ origen: "SAN FERNANDO", destino: "CD. VICTORIA", km: 179, ruta: "SAN FERNANDO a CD. VICTORIA" },


	{ origen: "ANTIGUO MORELOS", destino: "CD. VICTORIA", km: 165, ruta: "ANTIGUO MORELOS a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "ANTIGUO MORELOS", km: 165, ruta: "CD. VICTORIA a ANTIGUO MORELOS" },


	{ origen: "CD. VICTORIA", destino: "ESTACION MANUEL", km: 165, ruta: "CD. VICTORIA a ESTACION MANUEL" },


	{ origen: "CD. VICTORIA", destino: "SOTO LA MARINA", km: 165, ruta: "CD. VICTORIA a SOTO LA MARINA" },


	{ origen: "ESTACION MANUEL", destino: "CD. VICTORIA", km: 165, ruta: "ESTACION MANUEL a CD. VICTORIA" },


	{ origen: "SOTO LA MARINA", destino: "CD. VICTORIA", km: 165, ruta: "SOTO LA MARINA a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "TULA CARRETERA", km: 156, ruta: "CD. VICTORIA a TULA CARRETERA" },


	{ origen: "TULA CARRETERA", destino: "CD. VICTORIA", km: 156, ruta: "TULA CARRETERA a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "LINARES", km: 155, ruta: "CD. VICTORIA a LINARES" },


	{ origen: "LINARES", destino: "CD. VICTORIA", km: 155, ruta: "LINARES a CD. VICTORIA" },


	{ origen: "CD. MANTE", destino: "TAMPICO - MADERO", km: 153, ruta: "CD. MANTE a TAMPICO - MADERO" },


	{ origen: "TAMPICO - MADERO", destino: "CD. MANTE", km: 153, ruta: "TAMPICO - MADERO a CD. MANTE" },


	{ origen: "CD. VICTORIA", destino: "VILLA GONZALEZ", km: 149, ruta: "CD. VICTORIA a VILLA GONZALEZ" },


	{ origen: "VILLA GONZALEZ", destino: "CD. VICTORIA", km: 149, ruta: "VILLA GONZALEZ a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "SAN CARLOS", km: 146, ruta: "CD. VICTORIA a SAN CARLOS" },


	{ origen: "ESTACION MANUEL", destino: "SOTO LA MARINA", km: 146, ruta: "ESTACION MANUEL a SOTO LA MARINA" },


	{ origen: "REYNOSA", destino: "SAN FERNANDO", km: 146, ruta: "REYNOSA a SAN FERNANDO" },


	{ origen: "SAN CARLOS", destino: "CD. VICTORIA", km: 146, ruta: "SAN CARLOS a CD. VICTORIA" },


	{ origen: "SAN FERNANDO", destino: "REYNOSA", km: 146, ruta: "SAN FERNANDO a REYNOSA" },


	{ origen: "SOTO LA MARINA", destino: "ESTACION MANUEL", km: 146, ruta: "SOTO LA MARINA a ESTACION MANUEL" },


	{ origen: "MATAMOROS", destino: "SAN FERNANDO", km: 139, ruta: "MATAMOROS a SAN FERNANDO" },


	{ origen: "SAN FERNANDO", destino: "MATAMOROS", km: 139, ruta: "SAN FERNANDO a MATAMOROS" },


	{ origen: "CD. MANTE", destino: "CD. VICTORIA", km: 135, ruta: "CD. MANTE a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "CD. MANTE", km: 135, ruta: "CD. VICTORIA a CD. MANTE" },


	{ origen: "CD. MANTE", destino: "PUENTE ALTAMIRA LAS PINAS", km: 132, ruta: "CD. MANTE a PUENTE ALTAMIRA LAS PINAS" },


	{ origen: "PUENTE ALTAMIRA LAS PINAS", destino: "CD. MANTE", km: 132, ruta: "PUENTE ALTAMIRA LAS PINAS a CD. MANTE" },


	{ origen: "CD. MANTE", destino: "ALTAMIRA", km: 131, ruta: "CD. MANTE a ALTAMIRA" },


	{ origen: "LINARES", destino: "MONTERREY", km: 128, ruta: "LINARES a MONTERREY" },


	{ origen: "MONTERREY", destino: "LINARES", km: 128, ruta: "MONTERREY a LINARES" },


	{ origen: "SAN FERNANDO", destino: "SOTO LA MARINA", km: 128, ruta: "SAN FERNANDO a SOTO LA MARINA" },


	{ origen: "SOTO LA MARINA", destino: "SAN FERNANDO", km: 128, ruta: "SOTO LA MARINA a SAN FERNANDO" },


	{ origen: "CD. DEL MAIZ", destino: "CD. MANTE", km: 122, ruta: "CD. DEL MAIZ a CD. MANTE" },


	{ origen: "CD. VICTORIA", destino: "SOTO LA MARINA", km: 120, ruta: "CD. VICTORIA a SOTO LA MARINA" },


	{ origen: "PADILLA", destino: "SOTO LA MARINA", km: 120, ruta: "PADILLA a SOTO LA MARINA" },


	{ origen: "SOTO LA MARINA", destino: "CD. VICTORIA", km: 120, ruta: "SOTO LA MARINA a CD. VICTORIA" },


	{ origen: "SOTO LA MARINA", destino: "PADILLA", km: 120, ruta: "SOTO LA MARINA a PADILLA" },


	{ origen: "ABASOLO", destino: "CD. VICTORIA", km: 116, ruta: "ABASOLO a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "ABASOLO", km: 116, ruta: "CD. VICTORIA a ABASOLO" },


	{ origen: "ALDAMA 2", destino: "TAMPICO - MADERO", km: 112, ruta: "ALDAMA 2 a TAMPICO - MADERO" },


	{ origen: "PADILLA", destino: "JAUMAVE", km: 112, ruta: "PADILLA a JAUMAVE" },


	{ origen: "TAMPICO - MADERO", destino: "ALDAMA 2", km: 112, ruta: "TAMPICO - MADERO a ALDAMA 2" },


	{ origen: "ALDAMA 2", destino: "SOTO LA MARINA", km: 111, ruta: "ALDAMA 2 a SOTO LA MARINA" },


	{ origen: "EL HUIZACHE", destino: "SAN LUIS POTOSI", km: 111, ruta: "EL HUIZACHE a SAN LUIS POTOSI" },


	{ origen: "SAN LUIS POTOSI", destino: "EL HUIZACHE", km: 111, ruta: "SAN LUIS POTOSI a EL HUIZACHE" },


	{ origen: "SOTO LA MARINA", destino: "ALDAMA 2", km: 111, ruta: "SOTO LA MARINA a ALDAMA 2" },


	{ origen: "CD. MANTE", destino: "TULA CARRETERA", km: 109, ruta: "CD. MANTE a TULA CARRETERA" },


	{ origen: "TULA CARRETERA", destino: "CD. MANTE", km: 109, ruta: "TULA CARRETERA a CD. MANTE" },


	{ origen: "VALLE HERMOSO", destino: "SAN FERNANDO", km: 102, ruta: "VALLE HERMOSO a SAN FERNANDO" },


	{ origen: "CD. MANTE", destino: "CD. VALLES", km: 100, ruta: "CD. MANTE a CD. VALLES" },


	{ origen: "CD. VALLES", destino: "CD. MANTE", km: 100, ruta: "CD. VALLES a CD. MANTE" },


	{ origen: "CD. VICTORIA", destino: "JIMENEZ", km: 95, ruta: "CD. VICTORIA a JIMENEZ" },


	{ origen: "JIMENEZ", destino: "CD. VICTORIA", km: 95, ruta: "JIMENEZ a CD. VICTORIA" },


	{ origen: "REYNOSA", destino: "VALLE HERMOSO", km: 93, ruta: "REYNOSA a VALLE HERMOSO" },


	{ origen: "TAMPICO - MADERO", destino: "VILLA GONZALEZ", km: 93, ruta: "TAMPICO - MADERO a VILLA GONZALEZ" },


	{ origen: "VALLE HERMOSO", destino: "REYNOSA", km: 93, ruta: "VALLE HERMOSO a REYNOSA" },


	{ origen: "VILLA GONZALEZ", destino: "TAMPICO - MADERO", km: 93, ruta: "VILLA GONZALEZ a TAMPICO - MADERO" },


	{ origen: "PUENTE ALTAMIRA LAS PINAS", destino: "ALDAMA 2", km: 91, ruta: "PUENTE ALTAMIRA LAS PINAS a ALDAMA 2" },


	{ origen: "VILLA GONZALEZ", destino: "TAMPICO NORTE", km: 91, ruta: "VILLA GONZALEZ a TAMPICO NORTE" },


	{ origen: "CD. VICTORIA", destino: "ENTRADA A ZARAGOZA", km: 87, ruta: "CD. VICTORIA a ENTRADA A ZARAGOZA" },


	{ origen: "ENTRADA A ZARAGOZA", destino: "CD. VICTORIA", km: 87, ruta: "ENTRADA A ZARAGOZA a CD. VICTORIA" },


	{ origen: "JIMENEZ", destino: "SAN FERNANDO", km: 84, ruta: "JIMENEZ a SAN FERNANDO" },


	{ origen: "CD. VICTORIA", destino: "JAUMAVE", km: 78, ruta: "CD. VICTORIA a JAUMAVE" },


	{ origen: "JAUMAVE", destino: "CD. VICTORIA", km: 78, ruta: "JAUMAVE a CD. VICTORIA" },


	{ origen: "JAUMAVE", destino: "TULA CARRETERA", km: 78, ruta: "JAUMAVE a TULA CARRETERA" },


	{ origen: "TULA CARRETERA", destino: "JAUMAVE", km: 78, ruta: "TULA CARRETERA a JAUMAVE" },


	{ origen: "ESTACION MANUEL", destino: "TAMPICO - MADERO", km: 77, ruta: "ESTACION MANUEL a TAMPICO - MADERO" },


	{ origen: "TAMPICO - MADERO", destino: "ESTACION MANUEL", km: 77, ruta: "TAMPICO - MADERO a ESTACION MANUEL" },


	{ origen: "CD. MANTE", destino: "ESTACION MANUEL", km: 76, ruta: "CD. MANTE a ESTACION MANUEL" },


	{ origen: "ESTACION MANUEL", destino: "CD. MANTE", km: 76, ruta: "ESTACION MANUEL a CD. MANTE" },


	{ origen: "CD. MANTE", destino: "LLERA", km: 74, ruta: "CD. MANTE a LLERA" },


	{ origen: "LLERA", destino: "CD. MANTE", km: 74, ruta: "LLERA a CD. MANTE" },


	{ origen: "PUENTE ALTAMIRA LAS PINAS", destino: "VILLA GONZALEZ", km: 72, ruta: "PUENTE ALTAMIRA LAS PINAS a VILLA GONZALEZ" },


	{ origen: "VILLA GONZALEZ", destino: "PUENTE ALTAMIRA LAS PINAS", km: 72, ruta: "VILLA GONZALEZ a PUENTE ALTAMIRA LAS PINAS" },


	{ origen: "VILLA GONZALEZ", destino: "ALTAMIRA", km: 71, ruta: "VILLA GONZALEZ a ALTAMIRA" },


	{ origen: "ANTIGUO MORELOS", destino: "CD. VALLES", km: 70, ruta: "ANTIGUO MORELOS a CD. VALLES" },


	{ origen: "CD. VALLES", destino: "ANTIGUO MORELOS", km: 70, ruta: "CD. VALLES a ANTIGUO MORELOS" },


	{ origen: "JIMENEZ", destino: "SOTO LA MARINA", km: 70, ruta: "JIMENEZ a SOTO LA MARINA" },


	{ origen: "SOTO LA MARINA", destino: "JIMENEZ", km: 70, ruta: "SOTO LA MARINA a JIMENEZ" },


	{ origen: "CD. MANTE", destino: "EL NARANJO", km: 63, ruta: "CD. MANTE a EL NARANJO" },


	{ origen: "EL NARANJO", destino: "CD. MANTE", km: 63, ruta: "EL NARANJO a CD. MANTE" },


	{ origen: "CD. VICTORIA", destino: "LLERA", km: 61, ruta: "CD. VICTORIA a LLERA" },


	{ origen: "LLERA", destino: "CD. VICTORIA", km: 61, ruta: "LLERA a CD. VICTORIA" },


	{ origen: "CD. MANTE", destino: "VILLA GONZALEZ", km: 60, ruta: "CD. MANTE a VILLA GONZALEZ" },


	{ origen: "VILLA GONZALEZ", destino: "CD. MANTE", km: 60, ruta: "VILLA GONZALEZ a CD. MANTE" },


	{ origen: "CD. DEL MAIZ", destino: "EL NARANJO", km: 59, ruta: "CD. DEL MAIZ a EL NARANJO" },


	{ origen: "CD. VICTORIA", destino: "ESTACION DE SANTA ENGRACIA", km: 59, ruta: "CD. VICTORIA a ESTACION DE SANTA ENGRACIA" },


	{ origen: "ESTACION DE SANTA ENGRACIA", destino: "CD. VICTORIA", km: 59, ruta: "ESTACION DE SANTA ENGRACIA a CD. VICTORIA" },


	{ origen: "ESTACION MANUEL", destino: "ALTAMIRA", km: 56, ruta: "ESTACION MANUEL a ALTAMIRA" },


	{ origen: "ESTACION MANUEL", destino: "PUENTE ALTAMIRA LAS PINAS", km: 56, ruta: "ESTACION MANUEL a PUENTE ALTAMIRA LAS PINAS" },


	{ origen: "PUENTE ALTAMIRA LAS PINAS", destino: "ESTACION MANUEL", km: 56, ruta: "PUENTE ALTAMIRA LAS PINAS a ESTACION MANUEL" },


	{ origen: "ESTACION MANUEL", destino: "ALTAMIRA", km: 55, ruta: "ESTACION MANUEL a ALTAMIRA" },


	{ origen: "PADILLA", destino: "JIMENEZ", km: 50, ruta: "PADILLA a JIMENEZ" },


	{ origen: "CD. VICTORIA", destino: "PADILLA", km: 45, ruta: "CD. VICTORIA a PADILLA" },


	{ origen: "PADILLA", destino: "CD. VICTORIA", km: 45, ruta: "PADILLA a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "VILLA DE CASAS", km: 41, ruta: "CD. VICTORIA a VILLA DE CASAS" },


	{ origen: "VILLA DE CASAS", destino: "CD. VICTORIA", km: 41, ruta: "VILLA DE CASAS a CD. VICTORIA" },


	{ origen: "CD. VICTORIA", destino: "EL ROBLE", km: 37, ruta: "CD. VICTORIA a EL ROBLE" },


	{ origen: "EL ROBLE", destino: "CD. VICTORIA", km: 37, ruta: "EL ROBLE a CD. VICTORIA" },


	{ origen: "ALDAMA 2", destino: "ESTACION MANUEL", km: 35, ruta: "ALDAMA 2 a ESTACION MANUEL" },


	{ origen: "ESTACION MANUEL", destino: "ALDAMA 2", km: 35, ruta: "ESTACION MANUEL a ALDAMA 2" },


	{ origen: "ANTIGUO MORELOS", destino: "CD. MANTE", km: 30, ruta: "ANTIGUO MORELOS a CD. MANTE" },


	{ origen: "CD. MANTE", destino: "ANTIGUO MORELOS", km: 30, ruta: "CD. MANTE a ANTIGUO MORELOS" },


	{ origen: "CD. VICTORIA", destino: "GUEMEZ", km: 24, ruta: "CD. VICTORIA a GUEMEZ" },


	{ origen: "GUEMEZ", destino: "CD. VICTORIA", km: 24, ruta: "GUEMEZ a CD. VICTORIA" },


	{ origen: "ESTACION MANUEL", destino: "VILLA GONZALEZ", km: 16, ruta: "ESTACION MANUEL a VILLA GONZALEZ" },


	{ origen: "VILLA GONZALEZ", destino: "ESTACION MANUEL", km: 16, ruta: "VILLA GONZALEZ a ESTACION MANUEL" },


	{ origen: "REYNOSA", destino: "MCALLEN", km: 15, ruta: "REYNOSA a MCALLEN" },

];
let origenes = [];
for (let z = 0; z < y.length; z++) {
	if (origenes.length == 0) {
		origenes.push(y[z].origen);
	}
	let r = $.inArray(y[z].origen, origenes);
	if (r === -1) {
		origenes.push(y[z].origen);
	}
}
origenes.sort();
for (let i = 0; i < origenes.length; i++) {
	$('#origen').append('<option value="' + origenes[i] + '" >' + origenes[i] + '</option>');
	$('#destino').append('<option value="' + origenes[i] + '" >' + origenes[i] + '</option>');
}
$('#origen').on('change', function () {
	buscar();
})
$('#destino').on('change', function () {
	buscar();
})
function buscar() {
	origen = $('#origen').val();
	destino = $('#destino').val();
	$('#opciones').html("");
	for (let z = 0; z < y.length; z++) {
		if (y[z].origen == origen && y[z].destino == destino) {
			km = y[z].km;
			ruta = y[z].ruta;

			console.log("La ruta directa es: " + ruta + " de " + km + "km");
			$('#opciones').append(`<div class="opcion">
					<h5>Ruta Directa</h5>
					<span>Ruta : `+ ruta + ` <br />
					<span>KM Totales: `+ km + `</span> <br />
					</div>`);
		}
	}
	//if(km === 0){
	console.log("Opciones 1 Escala");
	$('#opciones').append('<h4>Opciones 1 Escala');
	console.log("Bucando opciones ...");
	//$('#opciones').append('<p>Bucando opciones ...</p>');
	let opciones = [];
	for (let z = 0; z < y.length; z++) {
		if (y[z].origen == origen) {
			let nuevoOrigen = y[z].destino;
			for (let a = 0; a < y.length; a++) {
				if (y[a].origen == nuevoOrigen && y[a].destino == destino) {
					let km1 = y[z].km;
					let ruta1 = y[z].ruta;
					let km2 = y[a].km;
					let ruta2 = y[a].ruta;
					let kmTotal = km1 + km2;
					opciones.push({ opcion: "Opcion " + z, kmTotal: kmTotal, ruta1: ruta1, km1: km1, ruta2: ruta2, km2: km2 });
					opciones.sort(function (a, b) {
						if (a.kmTotal > b.kmTotal) {
							return 1;
						}
						if (a.kmTotal < b.kmTotal) {
							return -1;
						}
						return 0;
					});
					console.log(opciones);

				}
			}
		}
	}
	if (opciones.length === 0) {
		$('#opciones').html("");
		console.log("No hay opciones :(");
		$('#opciones').append("<h4>No hay opciones :(</h4>");
	}
	for (let i = 0; i < opciones.length; i++) {
		$('#opciones').append(`<div class="opcion">
					<h5>Opción `+ (i + 1) + `</h5>
					<span>Ruta 1: `+ opciones[i].ruta1 + ` <br />
					<span>Ruta 2: `+ opciones[i].ruta2 + `  <br />
					<span>KM Totales: `+ opciones[i].kmTotal + `</span> <br />
					</div>`);
	}
}

/*$.soap({
	url: 'http://centos.transpais.com.mx/VentaWebService/services/VentaService',
	method: 'POST',

	data: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ven="ventaService">
	<soapenv:Header/>
	<soapenv:Body>
	   <ven:buscarOrigenInternet>
		  <ven:in0>-1</ven:in0>
		  <ven:in1>2315DISTRI</ven:in1>
		  <ven:in2>12345678</ven:in2>
	   </ven:buscarOrigenInternet>
	</soapenv:Body>
 </soapenv:Envelope>`,

	success: function (soapResponse) {
		// do stuff with soapResponse
		// if you want to have the response as JSON use soapResponse.toJSON();
		// or soapResponse.toString() to get XML string
		// or soapResponse.toXML() to get XML DOM
		console.log(soapResponse)
	},
	error: function (SOAPResponse) {
		// show error
		console.log(SOAPResponse)
	}*
});*/