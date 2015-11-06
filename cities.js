// Top 500 European Cities geocoded for latitude/longitude      
// Source: http://www.citymayors.com/features/euro_cities1.html          
var cities_Europe = 
  [                 
     {"city": "Moscow, Russia", "ll": "55.75,37.6166667"}
    ,{"city": "London, UK", "ll": "51.5081289,-0.128005"}
    ,{"city": "St Petersburg, Russia", "ll": "60.07623830000001,30.1213829"}
    ,{"city": "Berlin, Germany", "ll": "52.524268,13.40629"}
    ,{"city": "Madrid, Spain", "ll": "40.4166909,-3.700345399999999"}
    ,{"city": "Rome, Italy", "ll": "41.8905198,12.4942486"}
    ,{"city": "Kiev, Kyiv city, Ukraine, 02000", "ll": "50.4501,30.5234"}
    ,{"city": "Paris, France", "ll": "48.856614,2.3522219"}
    ,{"city": "Bucharest, Romania", "ll": "44.43771100000001,26.0973669"}
    ,{"city": "Budapest, Hungary", "ll": "47.4984056,19.0407578"}
    ,{"city": "Hamburg, Germany", "ll": "53.556866,9.994622"}
    ,{"city": "Minsk, Belarus", "ll": "53.9,27.5666667"}
    ,{"city": "Warsaw, Poland", "ll": "52.2296756,21.0122287"}
    ,{"city": "Belgrade, Serbia", "ll": "44.802416,20.465601"}
    ,{"city": "Vienna, Austria", "ll": "48.2081743,16.3738189"}
    ,{"city": "Kharkiv, Kharkivs'ka oblast, Ukraine, 61000", "ll": "49.9935,36.230383"}
    ,{"city": "Barcelona, Spain", "ll": "41.387917,2.1699187"}
    ,{"city": "Novosibirsk, Novosibirskaya oblast, Russia", "ll": "55.0333333,82.9166667"}
    ,{"city": "Nizhny Novgorod, Nizhegorodskaya oblast, Russia", "ll": "56.3166667,44"}
    ,{"city": "Milan, Italy", "ll": "45.463681,9.1881714"}
    ,{"city": "Yekaterinburg, Sverdlovskaya oblast, Russia", "ll": "56.84999999999999,60.59999999999999"}
    ,{"city": "Munich, Germany", "ll": "48.1448353,11.5580067"}
    ,{"city": "Prague, Czech Republic", "ll": "50.0878114,14.4204598"}
    ,{"city": "Samara, Samarskaya oblast, Russia", "ll": "53.2415041,50.2212463"}
    ,{"city": "Omsk, Omsk Oblast, Russia", "ll": "54.9833333,73.3666667"}
    ,{"city": "Sofia, Bulgaria", "ll": "42.6964917,23.3260106"}
    ,{"city": "Dnipropetrovs'k, Dnipropetrovs'ka oblast, Ukraine, 49000", "ll": "48.464717,35.046183"}
    ,{"city": "Kazan, Republic of Tatarstan, Russia", "ll": "55.8005556,49.1055556"}
    ,{"city": "Ufa, Republic of Bashkortostan, Russia", "ll": "54.7833333,56.0333333"}
    ,{"city": "Chelyabinsk, Chelyabinskaya oblast, Russia", "ll": "55.201612,61.43839000000001"}
    ,{"city": "Donets'k, Donets'ka oblast, Ukraine, 83000", "ll": "48.015883,37.80285"}
    ,{"city": "Naples, Italy", "ll": "40.8399833,14.2525421"}
    ,{"city": "Birmingham, West Midlands, UK", "ll": "52.48624299999999,-1.890401"}
    ,{"city": "Perm, Perm Krai, Russia", "ll": "58.00000000000001,56.25"}
    ,{"city": "Rostov-on-Don, Rostovskaya oblast, Russia", "ll": "47.2166667,39.7"}
    ,{"city": "Odesa, Odes'ka oblast, Ukraine, 65000", "ll": "46.484583,30.7326"}
    ,{"city": "Volgograd, Volgogradskaya oblast, Russia", "ll": "48.7,44.51666669999999"}
    ,{"city": "Cologne, Germany", "ll": "50.9580867,6.9204493"}
    ,{"city": "Turin, Italy", "ll": "45.0708515,7.6843404"}
    ,{"city": "Voronezh, Voronezh Oblast, Russia", "ll": "51.65,39.2"}
    ,{"city": "Krasnoyarsk, Krasnoyarsk Krai, Russia", "ll": "56,93"}
    ,{"city": "Saratov, Saratov Oblast, Russia", "ll": "51.5330556,46.0344444"}
    ,{"city": "Zagreb, Croatia", "ll": "45.814912,15.9785145"}
    ,{"city": "Zaporozhye, Zaporiz'ka oblast, Ukraine, 69061", "ll": "47.8388,35.139567"}
    ,{"city": "Łódź, Poland", "ll": "51.7592485,19.4559833"}
    ,{"city": "Marseille, France", "ll": "43.296482,5.36978"}
    ,{"city": "Riga, Latvia", "ll": "56.9462031,24.1042872"}
    ,{"city": "L'viv, L'vivs'ka oblast, Ukraine, 79000", "ll": "49.839683,24.029717"}
    ,{"city": "Athens, Greece", "ll": "37.9753357,23.7361497"}
    ,{"city": "Salonika, Greece", "ll": "40.63935,22.944607"}
    ,{"city": "Stockholm, Sweden", "ll": "59.32893000000001,18.06491"}
    ,{"city": "Kraków, Poland", "ll": "50.06465009999999,19.9449799"}
    ,{"city": "Valencia, Spain", "ll": "39.4702393,-0.3768049"}
    ,{"city": "Amsterdam, The Netherlands", "ll": "52.3702157,4.895167900000001"}
    ,{"city": "Leeds, West Yorkshire, UK", "ll": "53.801279,-1.548567"}
    ,{"city": "Tolyatti, Samarskaya oblast, Russia", "ll": "53.4833333,49.51666669999999"}
    ,{"city": "Kryvyi Rih, Dnipropetrovs'ka oblast, Ukraine, 50000", "ll": "47.910483,33.391783"}
    ,{"city": "Seville, Spain", "ll": "37.38263999999999,-5.996295099999999"}
    ,{"city": "Palermo, Italy", "ll": "38.11564,13.3614059"}
    ,{"city": "Ulyanovsk, Ulyanovskaya oblast, Russia", "ll": "54.3166667,48.3666667"}
    ,{"city": "Chisinau, Moldova", "ll": "47.02685899999999,28.841551"}
    ,{"city": "Genoa, Italy", "ll": "44.4070624,8.9339889"}
    ,{"city": "Izhevsk, Udmurt Republic, Russia", "ll": "56.84999999999999,53.2166667"}
    ,{"city": "Frankfurt, Germany", "ll": "50.1109221,8.6821267"}
    ,{"city": "Krasnodar, Krasnodarskiy Kray, Russia", "ll": "45.0333333,38.9833333"}
    ,{"city": "Wrocław, Poland", "ll": "51.1078852,17.0385376"}
    ,{"city": "Glasgow, UK", "ll": "55.864237,-4.251806"}
    ,{"city": "Yaroslavl, Yaroslavskaya oblast, Russia", "ll": "57.6527778,39.8761111"}
    ,{"city": "Khabarovsk, Khabarovsk Krai, Russia", "ll": "48.4666667,135.1"}
    ,{"city": "Vladivostok, Primorsky Krai, Russia", "ll": "43.1666667,131.9333333"}
    ,{"city": "Saragossa, Spain", "ll": "41.6562873,-0.8765379000000001"}
    ,{"city": "Essen, Germany", "ll": "51.46227,7.008653300000001"}
    ,{"city": "Rotterdam, The Netherlands", "ll": "51.92421599999999,4.481776"}
    ,{"city": "Irkutsk, Irkutsk Oblast, Russia", "ll": "52.2833333,104.2666667"}
    ,{"city": "Dortmund, Germany", "ll": "51.50409879999999,7.4835995"}
    ,{"city": "Stuttgart, Germany", "ll": "48.7754181,9.181758799999999"}
    ,{"city": "Barnaul, Altai Krai, Russia", "ll": "53.3333333,83.7666667"}
    ,{"city": "Vilnius, Lithuania", "ll": "54.6893865,25.2800243"}
    ,{"city": "Poznań, Poland", "ll": "52.406374,16.9251681"}
    ,{"city": "Düsseldorf, Germany", "ll": "51.220532,6.810061699999999"}
    ,{"city": "Novokuznetsk, Kemerovo Oblast, Russia", "ll": "53.75,87.1166667"}
    ,{"city": "Lisbon, Portugal", "ll": "38.70693199999999,-9.135632099999999"}
    ,{"city": "Helsinki, Finland", "ll": "60.169845,24.9385508"}
    ,{"city": "Malaga, Spain", "ll": "36.7196484,-4.420016299999999"}
    ,{"city": "Bremen, Germany", "ll": "53.0847558,8.8208279"}
    ,{"city": "Sheffield, South Yorkshire, UK", "ll": "53.38112899999999,-1.470085"}
    ,{"city": "Sarajevo, Bosnia and Herzegovina", "ll": "43.8476,18.3564"}
    ,{"city": "Penza, Penza Oblast, Russia", "ll": "53.2,45.01666669999999"}
    ,{"city": "Ryazan, Ryazanskaya oblast, Russia", "ll": "54.6166667,39.7333333"}
    ,{"city": "Orenburg, Orenburgskaya oblast, Russia", "ll": "51.7833333,55.09999999999999"}
    ,{"city": "Naberezhnye Chelny, Republic of Tatarstan, Russia", "ll": "55.7,52.3166667"}
    ,{"city": "Duisburg, Germany", "ll": "51.4344079,6.762329299999999"}
    ,{"city": "Lipetsk, Lipetskaya oblast, Russia", "ll": "52.59999999999999,39.5666667"}
    ,{"city": "Hanover, Germany", "ll": "52.3843792,9.7271906"}
    ,{"city": "Mykolaiv, Mykolaivs'ka oblast, Ukraine, 54000", "ll": "46.975033,31.994583"}
    ,{"city": "Tula, Tul'skaya oblast, Russia", "ll": "54.2,37.6166667"}
    ,{"city": "Oslo, Norway", "ll": "59.9138688,10.7522454"}
    ,{"city": "Tyumen, Tyumenskaya oblast, Russia", "ll": "57.1666667,65.55"}
    ,{"city": "Copenhagen, Denmark", "ll": "55.6760968,12.5683371"}
    ,{"city": "Kemerovo, Kemerovo Oblast, Russia", "ll": "55.34999999999999,86.05"}
    ,{"city": "Mariupol', Donets'ka oblast, Ukraine, 87500", "ll": "47.097133,37.543367"}
    ,{"city": "Leipzig, Germany", "ll": "51.3490384,12.3938226"}
    ,{"city": "Nuremberg, Germany", "ll": "49.4451843,11.087422"}
    ,{"city": "Bradford, West Yorkshire, UK", "ll": "53.795984,-1.759398"}
    ,{"city": "Astrakhan, Astrakhanskaya oblast, Russia", "ll": "46.35,48.05"}
    ,{"city": "Dublin, Co. Dublin, Ireland", "ll": "53.34410399999999,-6.267493699999999"}
    ,{"city": "Tomsk, Tomskaya oblast, Russia", "ll": "56.5,84.96666669999999"}
    ,{"city": "Dresden, Germany", "ll": "51.0305106,13.7572182"}
    ,{"city": "Homieĺ, Belarus", "ll": "52.4452778,30.9841667"}
    ,{"city": "Liverpool, Merseyside, UK", "ll": "53.41154,-2.990116"}
    ,{"city": "Antwerp, Belgium", "ll": "51.21921589999999,4.402881799999999"}
    ,{"city": "Luhans'k, Luhans'ka oblast, Ukraine, 91000", "ll": "48.574041,39.307815"}
    ,{"city": "Kirov, Kirov Oblast, Russia", "ll": "58.59999999999999,49.65"}
    ,{"city": "Gothenburg, Sweden", "ll": "57.70887,11.97456"}
    ,{"city": "Cheboksary, Chuvash Republic, Russia", "ll": "56.1333333,47.2333333"}
    ,{"city": "Ivanovo, Ivanovo Oblast, Russia", "ll": "57.01666669999999,40.9833333"}
    ,{"city": "Gdańsk, Poland", "ll": "54.35202520000001,18.6466384"}
    ,{"city": "Bryansk, Bryansk Oblast, Russia", "ll": "53.25,34.4"}
    ,{"city": "Tver, Tverskaya oblast, Russia", "ll": "56.8666667,35.9166667"}
    ,{"city": "Edinburgh, Midlothian, UK", "ll": "55.953252,-3.188267"}
    ,{"city": "Bratislava, Slovakia", "ll": "48.1462386,17.1072618"}
    ,{"city": "The Hague, The Netherlands", "ll": "52.0704978,4.3006999"}
    ,{"city": "Kursk, Kurskaya oblast, Russia", "ll": "51.7166667,36.1833333"}
    ,{"city": "Manchester, UK", "ll": "53.479251,-2.247926"}
    ,{"city": "Skopje, Macedonia", "ll": "42.003812,21.452246"}
    ,{"city": "Magnitogorsk, Chelyabinskaya oblast, Russia", "ll": "53.4166667,58.9666667"}
    ,{"city": "Kaliningrad, Kaliningrad Oblast, Russia", "ll": "54.7,20.5"}
    ,{"city": "Tallinn, Estonia", "ll": "59.4426896,24.7531972"}
    ,{"city": "Szczecin, Poland", "ll": "53.4285438,14.5528116"}
    ,{"city": "Lyon, France", "ll": "45.764043,4.835659"}
    ,{"city": "Kaunas, Lithuania", "ll": "54.8968721,23.8924264"}
    ,{"city": "Bristol, UK", "ll": "51.454513,-2.58791"}
    ,{"city": "Nizhny Tagil, Sverdlovskaya oblast, Russia", "ll": "57.91666670000001,59.96666669999999"}
    ,{"city": "Bochum, Germany", "ll": "51.4696168,7.198734699999998"}
    ,{"city": "Kirklees, UK", "ll": "53.5933432,-1.8009509"}
    ,{"city": "Makiivka, Donets'ka oblast, Ukraine, 86100", "ll": "48.04645,37.964167"}
    ,{"city": "Bydgoszcz, Poland", "ll": "53.12348040000001,18.0084378"}
    ,{"city": "Bologna, Italy", "ll": "44.4941903,11.3465185"}
    ,{"city": "Brno, Czech Republic", "ll": "49.19205059999999,16.6131909"}
    ,{"city": "Vinnytsya, Vinnyts'ka oblast, Ukraine, 21000", "ll": "49.233083,28.468217"}
    ,{"city": "Florence, Italy", "ll": "43.7687324,11.2569013"}
    ,{"city": "Murmansk, Murmansk Oblast, Russia", "ll": "68.9930681,33.1184479"}
    ,{"city": "Ulan-Ude, Republic of Buryatia, Russia", "ll": "51.8333333,107.6"}
    ,{"city": "Wuppertal, Germany", "ll": "51.2611814,7.162903399999999"}
    ,{"city": "Arkhangelsk, Arkhangelsk Oblast, Russia", "ll": "64.55,40.5333333"}
    ,{"city": "Kurganskaya oblast, Russia", "ll": "55.4481548,65.11809749999999"}
    ,{"city": "Toulouse, France", "ll": "43.604652,1.444209"}
    ,{"city": "Lublin, Poland", "ll": "51.2464536,22.5684463"}
    ,{"city": "Mogilev, Belarus", "ll": "53.9,30.3333333"}
    ,{"city": "Kherson, Khersons'ka oblast, Ukraine, 73009", "ll": "46.635417,32.616867"}
    ,{"city": "Palmas de Gran Canaria, Spain", "ll": "28.1248227,-15.4300065"}
    ,{"city": "Smolensk, Smolensk Oblast, Russia", "ll": "54.7833333,32.05"}
    ,{"city": "Bilbao, Spain", "ll": "43.2569629,-2.9234409"}
    ,{"city": "Sevastopol', Sevastopol' city, Ukraine, 99000", "ll": "44.61665,33.525367"}
    ,{"city": "Murcia, Spain", "ll": "37.98344489999999,-1.1298897"}
    ,{"city": "Fife, UK", "ll": "56.2082078,-3.1495175"}
    ,{"city": "Iaşi, Romania", "ll": "47.1569444,27.5902778"}
    ,{"city": "Katowice, Poland", "ll": "50.26489189999999,19.0237815"}
    ,{"city": "Nice, France", "ll": "43.696036,7.265592"}
    ,{"city": "Stavropol, Stavropol Krai, Russia", "ll": "45.05,41.9833333"}
    ,{"city": "Constanta, Romania", "ll": "44.1733333,28.6383333"}
    ,{"city": "Oryol, Orlovskaya oblast, Russia", "ll": "52.9666667,36.0666667"}
    ,{"city": "Catania, Italy", "ll": "37.5024825,15.0878345"}
    ,{"city": "Vitebsk, Belarus", "ll": "55.19443589999999,30.1953792"}
    ,{"city": "Kaluga, Kaluga Oblast, Russia", "ll": "54.5333333,36.2666667"}
    ,{"city": "Belgorod, Belgorodskaya oblast, Russia", "ll": "50.6166667,36.5833333"}
    ,{"city": "Zurich, Switzerland", "ll": "47.3686498,8.539182499999999"}
    ,{"city": "Simferopol', Crimea, Ukraine, 95000", "ll": "44.952117,34.102417"}
    ,{"city": "Bari", "ll": "41.1259135,16.8721133"}
    ,{"city": "Vladimir, Vladimirskaya oblast, Russia", "ll": "56.1333333,40.4166667"}
    ,{"city": "Sochi, Krasnodarskiy Kray, Russia", "ll": "43.4395848,39.9277252"}
    ,{"city": "Cluj-Napoca, Romania", "ll": "46.777248,23.5998899"}
    ,{"city": "Makhachkala, Republic of Dagestan, Russia", "ll": "42.9783677,47.4910661"}
    ,{"city": "Galati, Romania", "ll": "45.42572000000001,28.031044"}
    ,{"city": "Wirral, Merseyside, UK", "ll": "53.37797399999999,-3.108818"}
    ,{"city": "North Lanarkshire, UK", "ll": "55.8289139,-3.9221958"}
    ,{"city": "Timisoara, Romania", "ll": "45.755539,21.237499"}
    ,{"city": "Cherepovets, Vologda Oblast, Russia", "ll": "59.1333333,37.9166667"}
    ,{"city": "Ostrava, Czech Republic", "ll": "49.8412715,18.2902483"}
    ,{"city": "Bielefeld, Germany", "ll": "52.02159630000001,8.545686"}
    ,{"city": "Wakefield, West Yorkshire, UK", "ll": "53.683298,-1.505924"}
    ,{"city": "Valladolid, Spain", "ll": "41.6529434,-4.7283811"}
    ,{"city": "Saransk, Republic of Mordovia, Russia", "ll": "54.1833333,45.1666667"}
    ,{"city": "Cardiff, UK", "ll": "51.48158100000001,-3.17909"}
    ,{"city": "Braşov, Romania", "ll": "45.655651,25.6108"}
    ,{"city": "Craiova, Romania", "ll": "44.32476,23.813471"}
    ,{"city": "Poltava, Poltavs'ka oblast, Ukraine, 36000", "ll": "49.58826699999999,34.551417"}
    ,{"city": "Tambov, Tambov Oblast, Russia", "ll": "52.7166667,41.4333333"}
    ,{"city": "Dudley, West Midlands, UK", "ll": "52.512255,-2.081112"}
    ,{"city": "Wigan, UK", "ll": "53.54544,-2.637474"}
    ,{"city": "Chita, Zabaykal'skiy Kray, Russia", "ll": "52.0515032,113.4711906"}
    ,{"city": "Vladikavkaz, North Ossetia-Alania, Russia", "ll": "43.0474558,44.6658064"}
    ,{"city": "East Riding of Yorkshire, UK", "ll": "53.8215889,-0.7189977"}
    ,{"city": "Cherkasy, Cherkas'ka oblast, Ukraine, 18000", "ll": "49.444433,32.059767"}
    ,{"city": "Mannheim, Germany", "ll": "49.4609731,8.4904166"}
    ,{"city": "Cordova, Spain", "ll": "37.88472670000001,-4.7791517"}
    ,{"city": "South Lanarkshire, UK", "ll": "55.5243038,-3.7035077"}
    ,{"city": "Chernihiv, Chernihivs'ka oblast, Ukraine, 14039", "ll": "51.4982,31.28935"}
    ,{"city": "Coventry, West Midlands, UK", "ll": "52.406822,-1.519693"}
    ,{"city": "Horlivka, Donets'ka oblast, Ukraine, 84601", "ll": "48.3071,38.029633"}
    ,{"city": "Palma, Spain", "ll": "39.5695059,2.649966"}
    ,{"city": "Hrodna, Belarus", "ll": "53.6666667,23.8333333"}
    ,{"city": "Bonn, Germany", "ll": "50.7116826,7.1047327"}
    ,{"city": "Vologda, Vologda Oblast, Russia", "ll": "59.2166667,39.9"}
    ,{"city": "Varna Municipality, Bulgaria", "ll": "43.21664519999999,27.9118058"}
    ,{"city": "Venice, Italy", "ll": "45.4343363,12.3387844"}
    ,{"city": "Zhytomyr, Zhytomyrs'ka oblast, Ukraine, 10000", "ll": "50.25465,28.658667"}
    ,{"city": "Belfast, UK", "ll": "54.59744329999999,-5.9340683"}
    ,{"city": "Sumy, Sums'ka oblast, Ukraine, 40000", "ll": "50.9077,34.7981"}
    ,{"city": "Leicester, UK", "ll": "52.6368778,-1.1397592"}
    ,{"city": "Komsomolsk-on-Amur, Khabarovsk Krai, Russia", "ll": "50.5666667,137"}
    ,{"city": "Sunderland, Tyne and Wear, UK", "ll": "54.906869,-1.383801"}
    ,{"city": "Sandwell, Smethwick, West Midlands B66, UK", "ll": "52.504335,-1.972875"}
    ,{"city": "Doncaster, South Yorkshire, UK", "ll": "53.52282,-1.128462"}
    ,{"city": "Stockport, UK", "ll": "53.406754,-2.158843"}
    ,{"city": "Sefton, Merseyside L29, UK", "ll": "53.503445,-2.970359"}
    ,{"city": "Kostroma, Kostromskaya oblast, Russia", "ll": "57.76666669999999,40.9333333"}
    ,{"city": "Vigo, Spain", "ll": "42.2313564,-8.7124471"}
    ,{"city": "Aarhus, Denmark", "ll": "56.162939,10.203921"}
    ,{"city": "Brest, Belarus", "ll": "52.1333333,23.6666667"}
    ,{"city": "Volzhsky, Volgogradskaya oblast, Russia", "ll": "48.7833333,44.76666669999999"}
    ,{"city": "Taganrog, Rostovskaya oblast, Russia", "ll": "47.2333333,38.9"}
    ,{"city": "Białystok, Poland", "ll": "53.13248859999999,23.1688403"}
    ,{"city": "Nottingham, UK", "ll": "52.95477,-1.158086"}
    ,{"city": "Petrozavodsk, Republic of Karelia, Russia", "ll": "61.78333329999999,34.35"}
    ,{"city": "Newcastle Upon Tyne, Tyne and Wear, UK", "ll": "54.978252,-1.61778"}
    ,{"city": "Gelsenkirchen, Germany", "ll": "51.517744,7.085717199999999"}
    ,{"city": "Bratsk, Irkutsk Oblast, Russia", "ll": "56.1166667,101.6"}
    ,{"city": "Dzerzhinsk, Nizhegorodskaya oblast, Russia", "ll": "56.2333333,43.45"}
    ,{"city": "Surgut, Khanty-Mansi Autonomous Okrug — Yugra, Russia", "ll": "61.25000000000001,73.4166667"}
    ,{"city": "Karlsruhe, Germany", "ll": "49.009148,8.3799444"}
    ,{"city": "Orsk, Orenburgskaya oblast, Russia", "ll": "51.2,58.56666670000001"}
    ,{"city": "Oporto, Portugal", "ll": "41.149968,-8.6102426"}
    ,{"city": "Alicante, Spain", "ll": "38.34521,-0.4809944999999999"}
    ,{"city": "Dneprodzerzhinsk, Dnipropetrovs'ka oblast, Ukraine, 51900", "ll": "48.523117,34.613683"}
    ,{"city": "Wiesbaden, Germany", "ll": "50.0630804,8.2433437"}
    ,{"city": "Kirovohrad, Kirovohrads'ka oblast, Ukraine, 25000", "ll": "48.50793300000001,32.262317"}
    ,{"city": "Hull, Kingston Upon Hull, UK", "ll": "53.7456709,-0.3367413"}
    ,{"city": "Novi Sad, Serbia", "ll": "45.25,19.85"}
    ,{"city": "Bolton, UK", "ll": "53.584441,-2.428619"}
    ,{"city": "Angarsk, Irkutsk Oblast, Russia", "ll": "52.5802778,103.9102778"}
    ,{"city": "Sterlitamak, Republic of Bashkortostan, Russia", "ll": "53.6333333,55.95"}
    ,{"city": "Münster, Germany", "ll": "51.9514808,7.625538799999999"}
    ,{"city": "Gijón, Spain", "ll": "43.5452608,-5.6619264"}
    ,{"city": "Ljubljana, Slovenia", "ll": "46.0514263,14.5059655"}
    ,{"city": "Mönchengladbach, Germany", "ll": "51.1804572,6.4428041"}
    ,{"city": "Chemnitz, Germany", "ll": "50.827845,12.9213697"}
    ,{"city": "Messina, Italy", "ll": "38.1923323,15.5555232"}
    ,{"city": "Walsall, West Midlands, UK", "ll": "52.586214,-1.982919"}
    ,{"city": "Chernovtsy, Chernivets'ka oblast, Ukraine, 58000", "ll": "48.291683,25.935217"}
    ,{"city": "Khmelnitsky, Khmel'nyts'ka oblast, Ukraine, 29000", "ll": "49.422983,26.987133"}
    ,{"city": "Malmö, Sweden", "ll": "55.604981,13.003822"}
    ,{"city": "Częstochowa, Poland", "ll": "50.8173871,19.1185308"}
    ,{"city": "Plymouth, UK", "ll": "50.3719165,-4.1360198"}
    ,{"city": "Hospitalet de Llobregat, Spain", "ll": "41.3595829,2.0997037"}
    ,{"city": "Rotherham, South Yorkshire, UK", "ll": "53.4326035,-1.3635009"}
    ,{"city": "Augsburg, Germany", "ll": "48.37144070000001,10.8982552"}
    ,{"city": "Stoke-on-Trent, UK", "ll": "53.002668,-2.179404"}
    ,{"city": "Halle, Germany", "ll": "51.47971,11.96864"}
    ,{"city": "Verona Province of Verona, Italy", "ll": "45.4383395,10.9917277"}
    ,{"city": "Gdynia, Poland", "ll": "54.5188898,18.5305409"}
    ,{"city": "Strasbourg, France", "ll": "48.583148,7.747882"}
    ,{"city": "Ploiesti, Romania", "ll": "44.94,26.03"}
    ,{"city": "Niš, Serbia", "ll": "43.31938,21.896328"}
    ,{"city": "Yoshkar-Ola, Mari El Republic, Russia", "ll": "56.6333333,47.8666667"}
    ,{"city": "Braunschweig, Germany", "ll": "52.2688736,10.5267696"}
    ,{"city": "Nantes, France", "ll": "47.218371,-1.553621"}
    ,{"city": "Wolverhampton, West Midlands, UK", "ll": "52.586973,-2.12882"}
    ,{"city": "Rivne, Rivnens'ka oblast, Ukraine, 33004", "ll": "50.6199,26.251617"}
    ,{"city": "Tirana, Albania", "ll": "41.326,19.816"}
    ,{"city": "Aachen, Germany", "ll": "50.7733179,6.1021106"}
    ,{"city": "Sosnowiec, Poland", "ll": "50.28626380000001,19.1040791"}
    ,{"city": "Granada, Spain", "ll": "37.17648740000001,-3.5979291"}
    ,{"city": "Kosice, Slovakia", "ll": "48.72099559999999,21.2577477"}
    ,{"city": "Krefeld, Germany", "ll": "51.3387609,6.5853417"}
    ,{"city": "Rybinsk, Yaroslavskaya oblast, Russia", "ll": "58.05,38.8333333"}
    ,{"city": "Corunna, Spain", "ll": "43.3708731,-8.395835"}
    ,{"city": "Kremenchuk, Poltavs'ka oblast, Ukraine, 39600", "ll": "49.065783,33.410033"}
    ,{"city": "Nizhnevartovsk, Khanty-Mansi Autonomous Okrug — Yugra, Russia", "ll": "60.9539167,76.5563507"}
    ,{"city": "Graz, Austria", "ll": "47.070714,15.439504"}
    ,{"city": "Prokopyevsk, Kemerovo Oblast, Russia", "ll": "53.8833333,86.71666669999999"}
    ,{"city": "Severodvinsk, Arkhangelsk Oblast, Russia", "ll": "64.5666667,39.85"}
    ,{"city": "South Gloucestershire, UK", "ll": "51.531456,-2.4547158"}
    ,{"city": "Magdeburg, Germany", "ll": "52.130807,11.628878"}
    ,{"city": "Ivano-Frankivs'k, Ivano-Frankivs'ka oblast, Ukraine, 76000", "ll": "48.922633,24.711117"}
    ,{"city": "Kiel, Germany", "ll": "54.3232927,10.1227652"}
    ,{"city": "Braila, Romania", "ll": "45.2691944,27.9574722"}
    ,{"city": "Derby, UK", "ll": "52.9225301,-1.4746186"}
    ,{"city": "Utrecht, The Netherlands", "ll": "52.0901422,5.109664899999999"}
    ,{"city": "Ternopil', Ternopil's'ka oblast, Ukraine, 46002", "ll": "49.553517,25.594767"}
    ,{"city": "Radom, Poland", "ll": "51.40272359999999,21.1471333"}
    ,{"city": "Ghent, Belgium", "ll": "51.053468,3.73038"}
    ,{"city": "Swansea, UK", "ll": "51.62144,-3.943645999999999"}
    ,{"city": "Nalchik, Kabardino-Balkaria, Russia", "ll": "43.48412219999999,43.6273607"}
    ,{"city": "Syktyvkar, Komi Republic, Russia", "ll": "61.67019670000001,50.8379021"}
    ,{"city": "Upravleniye MVD Rossii Po g. Velikiy Novgorod, Otdel Politsii № 1, ул. Пестовская, 2, г. В. Новгород, Novgorodskaya oblast, Russia, 173014", "ll": "58.5449715,31.269119"}
    ,{"city": "Salford, UK", "ll": "53.488465,-2.2982969"}
    ,{"city": "Bergen, Norway", "ll": "60.39126279999999,5.3220544"}
    ,{"city": "Aberdeenshire, UK", "ll": "57.16214290000001,-2.7194167"}
    ,{"city": "Barnsley, South Yorkshire, UK", "ll": "53.55263,-1.479726"}
    ,{"city": "Biysk, Altai Krai, Russia", "ll": "52.5333333,85.1666667"}
    ,{"city": "Nizhnekamsk, Republic of Tatarstan, Russia", "ll": "55.6333333,51.8166667"}
    ,{"city": "Trieste, Italy", "ll": "45.6535567,13.7784665"}
    ,{"city": "Oberhausen, Germany", "ll": "51.4964886,6.8515156"}
    ,{"city": "Oradea, Romania", "ll": "47.0722222,21.9211111"}
    ,{"city": "Shakhty, Rostovskaya oblast, Russia", "ll": "47.7,40.2333333"}
    ,{"city": "Tameside, UK", "ll": "53.4805828,-2.0809891"}
    ,{"city": "Babrujsk, Belarus", "ll": "53.15,29.2333333"}
    ,{"city": "Oldham, UK", "ll": "53.5445459,-2.118732"}
    ,{"city": "Blagoveshchensk, Amur Oblast, Russia", "ll": "50.2747222,127.5338889"}
    ,{"city": "Trafford, UK", "ll": "53.4325608,-2.3395318"}
    ,{"city": "Aberdeen, UK", "ll": "57.149717,-2.094278"}
    ,{"city": "Luts'k, Volyns'ka oblast, Ukraine, 43000", "ll": "50.74723299999999,25.325383"}
    ,{"city": "Vitoria-Gasteiz, Spain", "ll": "42.8467181,-2.6716351"}
    ,{"city": "Southampton, UK", "ll": "50.90970040000001,-1.4043509"}
    ,{"city": "Lübeck, Germany", "ll": "53.86588560000001,10.6870959"}
    ,{"city": "Padua, Italy", "ll": "45.4095382,11.8765537"}
    ,{"city": "Bila Tserkva, Kyivs'ka oblast, Ukraine, 09100", "ll": "49.801945,30.115196"}
    ,{"city": "Taranto, Italy", "ll": "40.4692383,17.2400088"}
    ,{"city": "Stary Oskol, Belgorodskaya oblast, Russia", "ll": "51.3,37.85"}
    ,{"city": "Kielce, Poland", "ll": "50.8660773,20.6285677"}
    ,{"city": "Gliwice, Poland", "ll": "50.29449229999999,18.6713802"}
    ,{"city": "Badalona, Spain", "ll": "41.450137,2.2474195"}
    ,{"city": "Bordeaux, France", "ll": "44.837789,-0.57918"}
    ,{"city": "Bacau, Romania", "ll": "46.571289,26.925171"}
    ,{"city": "Highland, UK", "ll": "57.3596139,-5.0992763"}
    ,{"city": "Montpellier, France", "ll": "43.610769,3.876716"}
    ,{"city": "Balakovo, Saratov Oblast, Russia", "ll": "52.01666669999999,47.8"}
    ,{"city": "Rochdale, UK", "ll": "53.614086,-2.161814"}
    ,{"city": "Zelenograd, Moscow Oblast, Russia", "ll": "55.98333330000001,37.1833333"}
    ,{"city": "Espoo, Finland", "ll": "60.20547910000001,24.6558839"}
    ,{"city": "Charleroi, Belgium", "ll": "50.4108095,4.444643"}
    ,{"city": "Toruń, Poland", "ll": "53.0137902,18.5984437"}
    ,{"city": "Hagen, Germany", "ll": "51.3670777,7.4632841"}
    ,{"city": "Bytom, Poland", "ll": "50.3483816,18.9157175"}
    ,{"city": "Novorossiysk, Krasnodarskiy Kray, Russia", "ll": "44.7166667,37.7666667"}
    ,{"city": "Debrecen, Hungary", "ll": "47.52997389999999,21.6393571"}
    ,{"city": "Solihull, West Midlands, UK", "ll": "52.411811,-1.77761"}
    ,{"city": "Rostock, Germany", "ll": "54.0834186,12.1004289"}
    ,{"city": "Linz, Austria", "ll": "48.30694,14.28583"}
    ,{"city": "Santa Cruz de Tenerife, Spain", "ll": "28.46981,-16.2548558"}
    ,{"city": "Klaipėda, Lithuania", "ll": "55.71080260000001,21.1318065"}
    ,{"city": "Freiburg im Breisgau, Germany", "ll": "47.9990077,7.842104299999999"}
    ,{"city": "Pskov, Pskovskaya oblast, Russia", "ll": "57.8166667,28.3333333"}
    ,{"city": "Erfurt, Germany", "ll": "50.98476789999999,11.0298799"}
    ,{"city": "Gateshead, Tyne and Wear, UK", "ll": "54.95268,-1.603411"}
    ,{"city": "Eindhoven, The Netherlands", "ll": "51.44164199999999,5.4697225"}
    ,{"city": "Split, Croatia", "ll": "43.5069502,16.4423974"}
    ,{"city": "Zabrze, Poland", "ll": "50.3249278,18.7857186"}
    ,{"city": "Saint-Étienne, France", "ll": "45.439695,4.3871779"}
    ,{"city": "Oviedo, Spain", "ll": "43.3602994,-5.844781"}
    ,{"city": "Petropavlovsk-Kamchatsky, Kamchatka Krai, Russia", "ll": "53.038483,158.6348045"}
    ,{"city": "Zlatoust, Chelyabinskaya oblast, Russia", "ll": "55.1858333,59.67472219999999"}
    ,{"city": "Rennes, France", "ll": "48.113475,-1.675708"}
    ,{"city": "Milton Keynes, UK", "ll": "52.038601,-0.757072"}
    ,{"city": "Yakutsk, Sakha Republic, Russia", "ll": "62.0380757,129.7293766"}
    ,{"city": "Kassel, Germany", "ll": "51.3127114,9.4797461"}
    ,{"city": "Móstoles, Spain", "ll": "40.3227707,-3.8657409"}
    ,{"city": "Banja Luka, Bosnia and Herzegovina", "ll": "44.76666669999999,17.1833333"}
    ,{"city": "Le Havre, France", "ll": "49.49437,0.107929"}
    ,{"city": "Liège, Belgium", "ll": "50.6325574,5.5796662"}
    ,{"city": "Burgas, Bulgaria", "ll": "42.4976779,27.4700254"}
    ,{"city": "Podolsk, Moscow Oblast, Russia", "ll": "55.4166667,37.55"}
    ,{"city": "North Tyneside, UK", "ll": "55.0182399,-1.4858436"}
    ,{"city": "Calderdale, UK", "ll": "53.7420418,-1.995269"}
    ,{"city": "Northampton, UK", "ll": "52.240477,-0.9026560000000001"}
    ,{"city": "Tampere, Finland", "ll": "61.49816000000001,23.7610554"}
    ,{"city": "Tilburg, The Netherlands", "ll": "51.5862949,5.079127199999999"}
    ,{"city": "Elche, Spain", "ll": "38.2671765,-0.6952195999999999"}
    ,{"city": "Portsmouth, UK", "ll": "50.8166667,-1.0833333"}
    ,{"city": "Kamensk-Uralsky, Sverdlovskaya oblast, Russia", "ll": "56.4279593,61.9081798"}
    ,{"city": "Brescia, Italy", "ll": "45.53983820000001,10.2229562"}
    ,{"city": "Engel's, Saratov Oblast, Russia", "ll": "51.4753297,46.1136773"}
    ,{"city": "Warrington WA1, UK", "ll": "53.395794,-2.571767"}
    ,{"city": "Uppsala, Sweden", "ll": "59.85856380000001,17.6389267"}
    ,{"city": "Kramators'k, Donets'ka oblast, Ukraine, 84314", "ll": "48.738967,37.58435"}
    ,{"city": "Piteşti, Romania", "ll": "44.8605556,24.8677778"}
    ,{"city": "Syzran, Samarskaya oblast, Russia", "ll": "53.1666667,48.4666667"}
    ,{"city": "Sabadell, Spain", "ll": "41.5486198,2.1074206"}
    ,{"city": "North Somerset, UK", "ll": "51.4409659,-2.7426528"}
    ,{"city": "Arad, Romania", "ll": "46.1666667,21.3166667"}
    ,{"city": "Novocherkassk, Rostovskaya oblast, Russia", "ll": "47.4358333,40.0986111"}
    ,{"city": "Saarbrücken, Germany", "ll": "49.24015720000001,6.996932699999999"}
    ,{"city": "Odense, Denmark", "ll": "55.40375599999999,10.40237"}
    ,{"city": "Mainz, Germany", "ll": "49.9928617,8.2472526"}
    ,{"city": "Berezniki, Perm Krai, Russia", "ll": "59.3949571,56.81215539999999"}
    ,{"city": "Santander, Spain", "ll": "43.4609602,-3.8079336"}
    ,{"city": "Piraeus, Greece", "ll": "37.950902,23.641103"}
    ,{"city": "Jerez de la Frontera, Spain", "ll": "36.6865618,-6.1371725"}
    ,{"city": "Bury, UK", "ll": "53.595024,-2.297151"}
    ,{"city": "Hamm, Germany", "ll": "51.6738583,7.815981600000001"}
    ,{"city": "Luton, UK", "ll": "51.8786707,-0.4200255"}
    ,{"city": "Kragujevac, Serbia", "ll": "44.012711,20.926741"}
    ,{"city": "Rheims, France", "ll": "49.258329,4.031696"}
    ,{"city": "Bielsko-Biała, Poland", "ll": "49.8223768,19.0583845"}
    ,{"city": "Reggio Calabria RC, Italy", "ll": "38.11462900000001,15.6502035"}
    ,{"city": "Volgodonsk, Rostovskaya oblast, Russia", "ll": "47.51666669999999,42.15"}
    ,{"city": "St Helens, Merseyside, UK", "ll": "53.456307,-2.737095"}
    ,{"city": "Stockton on Tees, Stockton-on-Tees, UK", "ll": "54.574987,-1.328791"}
    ,{"city": "Renfrewshire, UK", "ll": "55.8298581,-4.5428385"}
    ,{"city": "San Sebastián, Spain", "ll": "43.3208116,-1.9844474"}
    ,{"city": "Yuzhno-Sakhalinsk, Sakhalinskaya oblast, Russia", "ll": "46.9666667,142.7333333"}
    ,{"city": "Herne, Germany", "ll": "51.5368948,7.200914699999999"}
    ,{"city": "Vantaa, Finland", "ll": "60.28548900000001,24.82192"}
    ,{"city": "York, UK", "ll": "53.9622908,-1.0818995"}
    ,{"city": "Modena, Italy", "ll": "44.647115,10.9251857"}
    ,{"city": "Thamesdown Dr, Swindon, UK", "ll": "51.59950389999999,-1.8049843"}
    ,{"city": "Leganés, Spain", "ll": "40.326422,-3.7589882"}
    ,{"city": "Mülheim, Germany", "ll": "51.4309558,6.8807461"}
    ,{"city": "Cagliari, Italy", "ll": "39.2154086,9.1093239"}
    ,{"city": "Miskolc, Hungary", "ll": "48.1043854,20.7913563"}
    ,{"city": "Geneva, Switzerland", "ll": "46.1983922,6.142296099999999"}
    ,{"city": "Southend-on-Sea, UK", "ll": "51.5459269,0.7077123"}
    ,{"city": "Groningen, The Netherlands", "ll": "53.2193835,6.566501799999999"}
    ,{"city": "Lille, France", "ll": "50.62925,3.057256"}
    ,{"city": "Turku, Finland", "ll": "60.449249,22.259239"}
    ,{"city": "Olsztyn, Poland", "ll": "53.778422,20.4801193"}
    ,{"city": "Almería, Spain", "ll": "36.8401638,-2.4679217"}
    ,{"city": "Cartagena, Spain", "ll": "37.6056505,-0.9912943999999999"}
    ,{"city": "Melitopol', Zaporiz'ka oblast, Ukraine, 72300", "ll": "46.8333333,35.3666667"}
    ,{"city": "Basle, Switzerland", "ll": "47.557421,7.592572699999999"}
    ,{"city": "Sibiu, Romania", "ll": "45.787441,24.143259"}
    ,{"city": "New Forest National Park, South Efford House, Milford Rd, Everton, Hampshire SO41 0JD, UK", "ll": "50.8758752,-1.6327718"}
    ,{"city": "Caerphilly, UK", "ll": "51.578829,-3.218134"}
    ,{"city": "Carmarthenshire, UK", "ll": "51.8598535,-4.260853099999999"}
    ,{"city": "Prato, Italy", "ll": "43.8796784,11.0962839"}
    ,{"city": "Plzeň, Czech Republic", "ll": "49.7474848,13.3776036"}
    ,{"city": "Abakan, Republic of Khakassia, Russia", "ll": "53.7166667,91.4166667"}
    ,{"city": "Rijeka, Croatia", "ll": "45.3284797,14.4364051"}
    ,{"city": "Toulon, France", "ll": "43.124228,5.928"}
    ,{"city": "Parma, Italy", "ll": "44.8078657,10.3295478"}
    ,{"city": "Baranavičy, Belarus", "ll": "53.1333333,26.0166667"}
    ,{"city": "Kerch, Crimea, Ukraine, 98300", "ll": "45.357314,36.468293"}
    ,{"city": "Ruse, Bulgaria", "ll": "43.8495786,25.9552292"}
    ,{"city": "Maykop, Republic of Adygea, Russia", "ll": "44.6,40.0833333"}
    ,{"city": "Miass, Chelyabinskaya oblast, Russia", "ll": "55,60.09999999999999"}
    ,{"city": "Solingen, Germany", "ll": "51.1704145,7.0542575"}
    ,{"city": "Târgu Mureş, Romania", "ll": "46.5455556,24.5625"}
    ,{"city": "Bath and North East Somerset, UK", "ll": "51.36362930000001,-2.4399987"}
    ,{"city": "Osnabrück, Germany", "ll": "52.2799112,8.0471788"}
    ,{"city": "Leghorn, Italy", "ll": "43.551876,10.3080108"}
    ,{"city": "Lyubertsy, Moscow Oblast, Russia", "ll": "55.6666667,37.9166667"}
    ,{"city": "Wycombe, Swanley, Greater London BR8, UK", "ll": "51.40132149999999,0.1477863"}
    ,{"city": "Terrassa, Spain", "ll": "41.560953,2.0104398"}
    ,{"city": "Armavir, Krasnodarskiy Kray, Russia", "ll": "45,41.1166667"}
    ,{"city": "Ludwigshafen, Germany", "ll": "49.4908113,8.4147976"}
    ,{"city": "Fuenlabrada, Spain", "ll": "40.28387300000001,-3.8003288"}
    ,{"city": "Embassy of Republic of Serbia, 18 Hercegovačka, Podgorica, Montenegro", "ll": "42.4429281,19.2618917"}
    ,{"city": "Alcala de Henares, Spain", "ll": "40.481663,-3.3641362"}
    ,{"city": "Basildon, Essex, UK", "ll": "51.57608399999999,0.488736"}
    ,{"city": "Rubtsovsk, Altai Krai, Russia", "ll": "51.51666669999999,81.2"}
    ,{"city": "Pamplona, Spain", "ll": "42.8179879,-1.6441835"}
    ,{"city": "Burgos, Spain", "ll": "42.3408923,-3.6997623"}
    ,{"city": "Leskovac, Serbia", "ll": "43,21.95"}
    ,{"city": "Rzeszów, Poland", "ll": "50.04094689999999,21.9992806"}
    ,{"city": "Aalborg, Denmark", "ll": "57.028811,9.917771"}
    ,{"city": "Kovrov, Vladimirskaya oblast, Russia", "ll": "56.34999999999999,41.3166667"}
    ,{"city": "Leverkusen, Germany", "ll": "51.04592479999999,7.0192196"}
    ,{"city": "Bournemouth, UK", "ll": "50.719164,-1.880769"}
    ,{"city": "Breda, The Netherlands", "ll": "51.58307,4.7769505"}
    ,{"city": "Peterborough, UK", "ll": "52.56949849999999,-0.2405299"}
    ,{"city": "Szeged, Hungary", "ll": "46.2536169,20.1461345"}
    ,{"city": "Nakhodka, Primorsky Krai, Russia", "ll": "42.8166667,132.8666667"}
    ,{"city": "North East Lincolnshire, UK", "ll": "53.5418558,-0.1263736"}
    ,{"city": "Ruda Śląska, Poland", "ll": "50.2558286,18.8555704"}
    ,{"city": "Salamanca, Spain", "ll": "40.9649681,-5.6630253"}
    ,{"city": "Pécs, Hungary", "ll": "46.0713242,18.2331772"}
    ,{"city": "Salavat, Republic of Bashkortostan, Russia", "ll": "53.3666667,55.93333329999999"}
    ,{"city": "Ussuriysk, Primorsky Krai, Russia", "ll": "43.8,131.95"}
    ,{"city": "Mytishchi, Moscow Oblast, Russia", "ll": "55.9166667,37.7333333"}
    ,{"city": "Chelmsford, Essex, UK", "ll": "51.734964,0.4761969999999999"}
    ,{"city": "Foggia, Italy", "ll": "41.4622919,15.5447458"}
    ,{"city": "Brighton, Brighton and Hove, UK", "ll": "50.842941,-0.131312"}
    ,{"city": "South Tyneside, UK", "ll": "54.9636693,-1.4418634"}
    ,{"city": "Charnwood, 1a Granby St, Loughborough, Leicestershire LE11 3DU, UK", "ll": "52.7705129,-1.2105882"}
    ,{"city": "Aylesbury, Buckinghamshire, UK", "ll": "51.815606,-0.8084"}
    ,{"city": "Colchester, Essex, UK", "ll": "51.895927,0.8918740000000001"}
    ,{"city": "Oldenburg, Germany", "ll": "53.14773899999999,8.2106028"}
    ,{"city": "Knowsley, Merseyside, UK", "ll": "53.454594,-2.852907"}
    ,{"city": "Patras, Greece", "ll": "38.254465,21.7370665"}
    ,{"city": "Apeldoorn, The Netherlands", "ll": "52.21115700000001,5.9699231"}
    ,{"city": "North Lincolnshire, UK", "ll": "53.60555919999999,-0.5596582"}
    ,{"city": "Huntingdonshire Regional College, California Rd, Huntingdon, Cambridgeshire PE29 1BL, UK", "ll": "52.3383842,-0.1782421"}
    ,{"city": "Macclesfield, Cheshire East, UK", "ll": "53.258663,-2.119287"}
    ,{"city": "Blackpool, UK", "ll": "53.8212725,-3.0554531"}
    ,{"city": "Perugia, Italy", "ll": "43.1107009,12.389172"}
    ,{"city": "Nijmegen, The Netherlands", "ll": "51.842867,5.854622"}
    ,{"city": "Balti, Moldova", "ll": "47.75494,27.913"}
    ,{"city": "Kolomna, Moscow Oblast, Russia", "ll": "55.0833333,38.7833333"}
    ,{"city": "Grenoble, France", "ll": "45.188529,5.724524"}
    ,{"city": "West Lothian, UK", "ll": "55.9070198,-3.5517167"}
    ,{"city": "Barysaŭ, Belarus", "ll": "54.2333333,28.5"}
    ,{"city": "Somerset, UK", "ll": "51.0587013,-2.9499066"}
    ,{"city": "Dundee, UK", "ll": "56.462018,-2.970721"}
    ,{"city": "Nikopol', Dnipropetrovs'ka oblast, Ukraine, 53200", "ll": "47.56746,34.394815"}
    ,{"city": "Neuss, Germany", "ll": "51.2041968,6.6879511"}
    ,{"city": "Baia Mare, Romania", "ll": "47.6666667,23.5833333"}
    ,{"city": "Enschede, The Netherlands", "ll": "52.2215372,6.8936619"}
    ,{"city": "Norilsk, Krasnoyarsk Krai, Russia", "ll": "69.33333329999999,88.21666669999999"}               
  ];
  



    

// Top 1000 US Cities geocoded for latitude/longitude
// Source: http://www.world-gazetteer.com/wg.php?x=&men=gcis&lng=en&des=wg&geo=-223&srt=npan&col=abcdefghinoq&msz=1500&pt=c&va=x
var cities_USA = 
    [
         {'city': 'Abilene, TX, USA', 'll': '32.4487364,-99.73314390000002'}
        ,{'city': 'Akron, OH, USA', 'll': '41.0814447,-81.51900529999999'}
        ,{'city': 'Alafaya, FL, USA', 'll': '28.5641,-81.2114'}
        ,{'city': 'Alameda, CA, USA', 'll': '37.7652065,-122.2416355'}
        ,{'city': 'Albany, NY, USA', 'll': '42.6525793,-73.7562317'}
        ,{'city': 'Albany, GA, USA', 'll': '31.5785074,-84.15574099999999'}
        ,{'city': 'Albany, OR, USA', 'll': '44.6365107,-123.1059282'}
        ,{'city': 'Albuquerque, NM, USA', 'll': '35.0844909,-106.6511367'}
        ,{'city': 'Alexandria, VA, USA', 'll': '38.8048355,-77.0469214'}
        ,{'city': 'Alexandria, LA, USA', 'll': '31.3112936,-92.4451371'}
        ,{'city': 'Alhambra, CA, USA', 'll': '34.095287,-118.1270146'}
        ,{'city': 'Aliso Viejo, CA, USA', 'll': '33.57509599999999,-117.725431'}
        ,{'city': 'Allen, TX, USA', 'll': '33.1031744,-96.67055030000002'}
        ,{'city': 'Allentown, PA, USA', 'll': '40.6084305,-75.4901833'}
        ,{'city': 'Aloha, OR, USA', 'll': '45.4942838,-122.8670454'}
        ,{'city': 'Alpharetta, GA, USA', 'll': '34.0753762,-84.2940899'}
        ,{'city': 'Altadena, CA, USA', 'll': '34.1897274,-118.1311819'}
        ,{'city': 'Altamonte Springs, FL, USA', 'll': '28.6611089,-81.3656242'}
        ,{'city': 'Altoona, PA, USA', 'll': '40.5186809,-78.3947359'}
        ,{'city': 'Amarillo, TX, USA', 'll': '35.2219971,-101.8312969'}
        ,{'city': 'Ames, IA, USA', 'll': '42.02335,-93.62562199999999'}
        ,{'city': 'Anaheim, CA, USA', 'll': '33.8352932,-117.9145036'}
        ,{'city': 'Anchorage, AK, USA', 'll': '61.2180556,-149.9002778'}
        ,{'city': 'Anderson, IN, USA', 'll': '40.1053196,-85.6802541'}
        ,{'city': 'Ankeny, IA, USA', 'll': '41.7266667,-93.6041667'}
        ,{'city': 'Ann Arbor, MI, USA', 'll': '42.2808256,-83.7430378'}
        ,{'city': 'Ann Arbor, MI, USA', 'll': '42.3076493,-83.8473015'}
        ,{'city': 'Antelope North Rd, CA, USA', 'll': '38.7172491,-121.3274832'}
        ,{'city': 'Antioch, CA, USA', 'll': '38.0049214,-121.805789'}
        ,{'city': 'Apache Junction, AZ, USA', 'll': '33.4150485,-111.5495777'}
        ,{'city': 'Apex, NC, USA', 'll': '35.732652,-78.85028559999999'}
        ,{'city': 'Apopka, FL, USA', 'll': '28.68675,-81.51327599999999'}
        ,{'city': 'Appleton, WI, USA', 'll': '44.2619309,-88.41538469999999'}
        ,{'city': 'Apple Valley, CA, USA', 'll': '34.5008311,-117.1858759'}
        ,{'city': 'Apple Valley, MN, USA', 'll': '44.7319094,-93.21772000000001'}
        ,{'city': 'Arcadia, CA, USA', 'll': '34.1397292,-118.0353449'}
        ,{'city': 'Arden-Arcade, CA, USA', 'll': '38.6008071,-121.3770336'}
        ,{'city': 'Arlington, TX, USA', 'll': '32.735687,-97.10806559999999'}
        ,{'city': 'Arlington, VA, USA', 'll': '38.8799697,-77.1067698'}
        ,{'city': 'Arlington, MA, USA', 'll': '42.4153925,-71.1564729'}
        ,{'city': 'Arlington Heights, IL, USA', 'll': '42.0883603,-87.98062650000001'}
        ,{'city': 'Arvada, CO, USA', 'll': '39.8027644,-105.0874842'}
        ,{'city': 'Ashburn, VA, USA', 'll': '39.0414079,-77.48101799999999'}
        ,{'city': 'Asheville, NC, USA', 'll': '35.6009452,-82.55401499999999'}
        ,{'city': 'Aspen Hill, MD, USA', 'll': '39.0795529,-77.07303379999999'}
        ,{'city': 'Atascocita, TX, USA', 'll': '29.99883059999999,-95.1765978'}
        ,{'city': 'Athens, GA, USA', 'll': '33.955802,-83.3823656'}
        ,{'city': 'Atlanta, GA, USA', 'll': '33.7489954,-84.3879824'}
        ,{'city': 'Attleboro, MA, USA', 'll': '41.94454409999999,-71.2856082'}
        ,{'city': 'Auburn, WA, USA', 'll': '47.30732279999999,-122.2284532'}
        ,{'city': 'Auburn, AL, USA', 'll': '32.6098566,-85.48078249999999'}
        ,{'city': 'Augusta, GA, USA', 'll': '33.474246,-82.00967'}
        ,{'city': 'Aurora, CO, USA', 'll': '39.7294319,-104.8319195'}
        ,{'city': 'Aurora, IL, USA', 'll': '41.7605849,-88.32007150000001'}
        ,{'city': 'Austin, TX, USA', 'll': '30.267153,-97.7430608'}
        ,{'city': 'Avondale, AZ, USA', 'll': '33.4355977,-112.3496021'}
        ,{'city': 'Azusa, CA, USA', 'll': '34.1336186,-117.9075627'}
        ,{'city': 'Bakersfield, CA, USA', 'll': '35.3732921,-119.0187125'}
        ,{'city': 'Baldwin Park, CA, USA', 'll': '34.0852868,-117.9608978'}
        ,{'city': 'Baltimore, MD, USA', 'll': '39.2903848,-76.6121893'}
        ,{'city': 'Barnstable, MA, USA', 'll': '41.7014167,-70.3030556'}
        ,{'city': 'Bartlett, TN, USA', 'll': '35.2045328,-89.8739753'}
        ,{'city': 'Bartlett, IL, USA', 'll': '41.9950276,-88.1856301'}
        ,{'city': 'Baton Rouge, LA, USA', 'll': '30.4582829,-91.1403196'}
        ,{'city': 'Battle Creek, MI, USA', 'll': '42.3211522,-85.17971419999999'}
        ,{'city': 'Bayonne, NJ, USA', 'll': '40.6687141,-74.1143091'}
        ,{'city': 'Baytown, TX, USA', 'll': '29.7355047,-94.97742740000001'}
        ,{'city': 'Beaumont, TX, USA', 'll': '30.080174,-94.1265562'}
        ,{'city': 'Beaumont, CA, USA', 'll': '33.9294606,-116.977248'}
        ,{'city': 'Beavercreek, OH, USA', 'll': '39.7092262,-84.06326849999999'}
        ,{'city': 'Beaverton, OR, USA', 'll': '45.48706199999999,-122.8037102'}
        ,{'city': 'Bedford, TX, USA', 'll': '32.844017,-97.1430671'}
        ,{'city': 'Bel Air South, MD, USA', 'll': '39.504033,-76.3181'}
        ,{'city': 'Belleville, IL, USA', 'll': '38.5200504,-89.9839935'}
        ,{'city': 'Bellevue, WA, USA', 'll': '47.610377,-122.2006786'}
        ,{'city': 'Bellevue, Washington, DC 20032, USA', 'll': '38.8274243,-77.0089452'}
        ,{'city': 'Bellevue, NE, USA', 'll': '41.1586111,-95.93416669999999'}
        ,{'city': 'Bellflower, CA, USA', 'll': '33.8816818,-118.1170117'}
        ,{'city': 'Bell Gardens, CA, USA', 'll': '33.9652918,-118.1514588'}
        ,{'city': 'Bellingham, WA, USA', 'll': '48.7595529,-122.4882249'}
        ,{'city': 'Bend, OR, USA', 'll': '44.0581728,-121.3153096'}
        ,{'city': 'Berkeley, CA, USA', 'll': '37.8715926,-122.272747'}
        ,{'city': 'Berwyn, IL, USA', 'll': '41.85058739999999,-87.7936685'}
        ,{'city': 'Bethesda, MD, USA', 'll': '38.984652,-77.0947092'}
        ,{'city': 'Bethlehem, PA, USA', 'll': '40.6259316,-75.37045789999999'}
        ,{'city': 'Billerica, MA, USA', 'll': '42.5584218,-71.2689461'}
        ,{'city': 'Billings, Mt, USA', 'll': '45.7832856,-108.5006904'}
        ,{'city': 'Biloxi, MS, USA', 'll': '30.3960318,-88.88530779999999'}
        ,{'city': 'Binghamton, NY, USA', 'll': '42.09868669999999,-75.91797380000001'}
        ,{'city': 'Birmingham, AL, USA', 'll': '33.5206608,-86.80248999999999'}
        ,{'city': 'Bismarck, ND, USA', 'll': '46.8083268,-100.7837392'}
        ,{'city': 'Blacksburg, VA, USA', 'll': '37.2295733,-80.4139393'}
        ,{'city': 'Blaine, MN, USA', 'll': '45.1607987,-93.23494889999999'}
        ,{'city': 'Bloomington, MN, USA', 'll': '44.840798,-93.2982799'}
        ,{'city': 'Bloomington, IN, USA', 'll': '39.165325,-86.52638569999999'}
        ,{'city': 'Bloomington, IL, USA', 'll': '40.4842027,-88.99368729999999'}
        ,{'city': 'Blue Springs, MO, USA', 'll': '39.0169509,-94.2816148'}
        ,{'city': 'Boca Raton, FL, USA', 'll': '26.3586885,-80.0830984'}
        ,{'city': 'Boise, ID, USA', 'll': '43.612631,-116.211076'}
        ,{'city': 'Bolingbrook, IL, USA', 'll': '41.69864159999999,-88.0683955'}
        ,{'city': 'Bonita Springs, FL, USA', 'll': '26.339806,-81.7786972'}
        ,{'city': 'Bossier City, LA, USA', 'll': '32.5159852,-93.7321228'}
        ,{'city': 'Boston, MA, USA', 'll': '42.3584308,-71.0597732'}
        ,{'city': 'Boulder, CO, USA', 'll': '40.0149856,-105.2705456'}
        ,{'city': 'Bountiful, UT, USA', 'll': '40.8893895,-111.880771'}
        ,{'city': 'Bowie, MD, USA', 'll': '39.0067768,-76.77913649999999'}
        ,{'city': 'Bowling Green, KY, USA', 'll': '36.9903199,-86.4436018'}
        ,{'city': 'Boynton Beach, FL, USA', 'll': '26.5253491,-80.0664309'}
        ,{'city': 'Bradenton, FL, USA', 'll': '27.4989278,-82.5748194'}
        ,{'city': 'Brandon, FL, USA', 'll': '27.937801,-82.2859247'}
        ,{'city': 'Brentwood, NY, USA', 'll': '40.7812093,-73.2462273'}
        ,{'city': 'Brentwood, CA, USA', 'll': '37.931868,-121.6957863'}
        ,{'city': 'Bridgeport, CT, USA', 'll': '41.1865478,-73.19517669999999'}
        ,{'city': 'Bristol, CT, USA', 'll': '41.67176480000001,-72.9492703'}
        ,{'city': 'Brockton, MA, USA', 'll': '42.0834335,-71.0183787'}
        ,{'city': 'Broken Arrow, OK, USA', 'll': '36.0525993,-95.7908195'}
        ,{'city': 'Brookline, MA, USA', 'll': '42.33176419999999,-71.1211635'}
        ,{'city': 'Brooklyn Park, MN, USA', 'll': '45.0941315,-93.3563405'}
        ,{'city': 'Broomfield, CO, USA', 'll': '39.9205411,-105.0866504'}
        ,{'city': 'Brownsville, TX, USA', 'll': '25.9017472,-97.4974838'}
        ,{'city': 'Bryan, TX, USA', 'll': '30.6743643,-96.3699632'}
        ,{'city': 'Buckeye, AZ, USA', 'll': '33.3703197,-112.5837766'}
        ,{'city': 'Buena Park, CA, USA', 'll': '33.8675143,-117.9981181'}
        ,{'city': 'Buffalo, NY, USA', 'll': '42.88644679999999,-78.8783689'}
        ,{'city': 'Buffalo Grove, IL, USA', 'll': '42.1662831,-87.9631308'}
        ,{'city': 'Bullhead City, AZ, USA', 'll': '35.1477774,-114.5682983'}
        ,{'city': 'Burbank, CA, USA', 'll': '34.1808392,-118.3089661'}
        ,{'city': 'Burbank, CA, USA', 'll': '37.3205556,-121.9316667'}
        ,{'city': 'Burlington, NC, USA', 'll': '36.0956918,-79.43779909999999'}
        ,{'city': 'Burlington, VT, USA', 'll': '44.4758825,-73.21207199999999'}
        ,{'city': 'Burnsville, MN, USA', 'll': '44.7677424,-93.27772259999999'}
        ,{'city': 'Caldwell, ID, USA', 'll': '43.66293839999999,-116.6873596'}
        ,{'city': 'Calexico, CA, USA', 'll': '32.6789476,-115.4988834'}
        ,{'city': 'Camarillo, CA, USA', 'll': '34.2163937,-119.0376023'}
        ,{'city': 'Cambridge, MA, USA', 'll': '42.3726399,-71.10965279999999'}
        ,{'city': 'Camden, NJ, USA', 'll': '39.9259463,-75.1196199'}
        ,{'city': 'Canton, OH, USA', 'll': '40.79894729999999,-81.378447'}
        ,{'city': 'Cape Coral, FL, USA', 'll': '26.5628537,-81.9495331'}
        ,{'city': 'Carlsbad, CA, USA', 'll': '33.1580933,-117.3505939'}
        ,{'city': 'Carmel, IN, USA', 'll': '39.978371,-86.1180435'}
        ,{'city': 'Carmichael, CA, USA', 'll': '38.617127,-121.3282843'}
        ,{'city': 'Carrollton, TX, USA', 'll': '32.9756415,-96.8899636'}
        ,{'city': 'Carson, CA, USA', 'll': '33.8314058,-118.2820165'}
        ,{'city': 'Carson Airport (CXP), Carson City, NV 89706, USA', 'll': '39.1999655,-119.7371151'}
        ,{'city': 'Cary, NC, USA', 'll': '35.79154,-78.7811169'}
        ,{'city': 'Casa Grande, AZ, USA', 'll': '32.8795022,-111.7573521'}
        ,{'city': 'Casas Adobes, AZ, USA', 'll': '32.3234078,-110.9950966'}
        ,{'city': 'Casper, WY, USA', 'll': '42.866632,-106.313081'}
        ,{'city': 'Castle Rock, CO, USA', 'll': '39.3722121,-104.8560902'}
        ,{'city': 'Castro Valley, CA, USA', 'll': '37.6940973,-122.0863522'}
        ,{'city': 'Catalina Foothills, AZ, USA', 'll': '32.297853,-110.9187037'}
        ,{'city': 'Cathedral City, CA, USA', 'll': '33.7797426,-116.4652911'}
        ,{'city': 'Catonsville, MD, USA', 'll': '39.2720509,-76.73191609999999'}
        ,{'city': 'Cedar Hill, TX, USA', 'll': '32.5884689,-96.9561152'}
        ,{'city': 'Cedar Park, TX, USA', 'll': '30.505198,-97.8202888'}
        ,{'city': 'Cedar Rapids, IA, USA', 'll': '41.9778795,-91.6656232'}
        ,{'city': 'Centennial, CO, USA', 'll': '39.5807452,-104.8771726'}
        ,{'city': 'Centerville, OH, USA', 'll': '39.6283928,-84.15938179999999'}
        ,{'city': 'Centreville, VA, USA', 'll': '38.8403909,-77.42887689999999'}
        ,{'city': 'Ceres, CA, USA', 'll': '37.5949316,-120.9577098'}
        ,{'city': 'Cerritos, CA, USA', 'll': '33.8583483,-118.0647871'}
        ,{'city': 'Champaign, IL, USA', 'll': '40.1164204,-88.2433829'}
        ,{'city': 'Chandler, AZ, USA', 'll': '33.3061605,-111.8412502'}
        ,{'city': 'Chapel Hill, NC, USA', 'll': '35.9131996,-79.0558445'}
        ,{'city': 'Charleston, SC, USA', 'll': '32.7765656,-79.93092159999999'}
        ,{'city': 'Charleston, WV, USA', 'll': '38.3498195,-81.6326234'}
        ,{'city': 'Charlotte, NC, USA', 'll': '35.2270869,-80.8431267'}
        ,{'city': 'Charlottesville, VA, USA', 'll': '38.0293059,-78.47667810000002'}
        ,{'city': 'Chattanooga, TN, USA', 'll': '35.0456297,-85.3096801'}
        ,{'city': 'Cheektowaga, NY, USA', 'll': '42.9026136,-78.74457199999999'}
        ,{'city': 'Chesapeake, VA, USA', 'll': '36.7682088,-76.2874927'}
        ,{'city': 'Chesterfield, MO, USA', 'll': '38.6631083,-90.5770675'}
        ,{'city': 'Cheyenne, WY, USA', 'll': '41.1399814,-104.8202462'}
        ,{'city': 'Chicago, IL, USA', 'll': '41.8781136,-87.6297982'}
        ,{'city': 'Chico, CA, USA', 'll': '39.7284944,-121.8374777'}
        ,{'city': 'Chicopee, MA, USA', 'll': '42.1487043,-72.6078672'}
        ,{'city': 'Chino, CA, USA', 'll': '34.0122346,-117.688944'}
        ,{'city': 'Chino Hills, CA, USA', 'll': '33.9898188,-117.7325848'}
        ,{'city': 'Chula Vista, CA, USA', 'll': '32.6400541,-117.0841955'}
        ,{'city': 'Cicero, IL, USA', 'll': '41.8455877,-87.7539448'}
        ,{'city': 'Cincinnati, OH, USA', 'll': '39.1031182,-84.5120196'}
        ,{'city': 'Citrus Heights, CA, USA', 'll': '38.7071247,-121.2810611'}
        ,{'city': 'Clarksville, TN, USA', 'll': '36.5297706,-87.3594528'}
        ,{'city': 'Clearwater, FL, USA', 'll': '27.9658533,-82.8001026'}
        ,{'city': 'Cleveland, OH, USA', 'll': '41.4994954,-81.6954088'}
        ,{'city': 'Cleveland, TN, USA', 'll': '35.1595182,-84.8766115'}
        ,{'city': 'Cleveland Heights, OH, USA', 'll': '41.5200518,-81.556235'}
        ,{'city': 'Clifton, NJ, USA', 'll': '40.8584328,-74.16375529999999'}
        ,{'city': 'Clovis, CA, USA', 'll': '36.8252277,-119.7029194'}
        ,{'city': 'Coachella, CA, USA', 'll': '33.6803003,-116.173894'}
        ,{'city': 'Coconut Creek, FL, USA', 'll': '26.2517482,-80.17893509999999'}
        ,{'city': "Coeur d'Alene, ID, USA", 'll': '47.6776832,-116.7804664'}
        ,{'city': 'College Station, TX, USA', 'll': '30.627977,-96.3344068'}
        ,{'city': 'Collierville, TN, USA', 'll': '35.042036,-89.6645266'}
        ,{'city': 'Colorado Springs, CO, USA', 'll': '38.8338816,-104.8213634'}
        ,{'city': 'Colton, CA, USA', 'll': '34.0739016,-117.3136547'}
        ,{'city': 'Columbia, SC, USA', 'll': '34.0007104,-81.0348144'}
        ,{'city': 'Columbia, MO, USA', 'll': '38.9517053,-92.3340724'}
        ,{'city': 'Columbia, MD, USA', 'll': '39.2040236,-76.860565'}
        ,{'city': 'Columbus, OH, USA', 'll': '39.9611755,-82.99879419999999'}
        ,{'city': 'Columbus, GA, USA', 'll': '32.4609764,-84.9877094'}
        ,{'city': 'Columbus, IN, USA', 'll': '39.2014404,-85.9213796'}
        ,{'city': 'Commerce City, CO, USA', 'll': '39.8083196,-104.9338675'}
        ,{'city': 'Compton, CA, USA', 'll': '33.8958492,-118.2200712'}
        ,{'city': 'Concord, CA, USA', 'll': '37.9779776,-122.0310733'}
        ,{'city': 'Concord, NC, USA', 'll': '35.4087517,-80.579511'}
        ,{'city': 'Concord, NH, USA', 'll': '43.2081366,-71.5375718'}
        ,{'city': 'Conroe, TX, USA', 'll': '30.3118769,-95.45605119999999'}
        ,{'city': 'Conway, AR, USA', 'll': '35.0886963,-92.4421011'}
        ,{'city': 'Coon Rapids, MN, USA', 'll': '45.1199652,-93.28772769999999'}
        ,{'city': 'Coral Gables, FL, USA', 'll': '25.72149,-80.2683838'}
        ,{'city': 'Coral Springs, FL, USA', 'll': '26.271192,-80.2706044'}
        ,{'city': 'Corona, CA, USA', 'll': '33.8752935,-117.5664384'}
        ,{'city': 'Corpus Christi, TX, USA', 'll': '27.8005828,-97.39638099999999'}
        ,{'city': 'Corvallis, OR, USA', 'll': '44.5645659,-123.2620435'}
        ,{'city': 'Costa Mesa, CA, USA', 'll': '33.6411316,-117.9186689'}
        ,{'city': 'Council Bluffs, IA, USA', 'll': '41.2619444,-95.8608333'}
        ,{'city': 'Country Club, FL, USA', 'll': '25.9481487,-80.3169953'}
        ,{'city': 'Covina, CA, USA', 'll': '34.0900091,-117.8903397'}
        ,{'city': 'Cranston, RI, USA', 'll': '41.7798226,-71.4372796'}
        ,{'city': 'Crystal Lake, IL, USA', 'll': '42.2411344,-88.31619649999999'}
        ,{'city': 'Cupertino, CA, USA', 'll': '37.3229978,-122.0321823'}
        ,{'city': 'Cutler Bay, FL, USA', 'll': '25.5783,-80.3377'}
        ,{'city': 'Cuyahoga Falls, OH, USA', 'll': '41.1339449,-81.48455849999999'}
        ,{'city': 'Cypress, CA, USA', 'll': '33.8169599,-118.0372852'}
        ,{'city': 'Dale City, VA, USA', 'll': '38.6370622,-77.31109459999999'}
        ,{'city': 'Dallas, TX, USA', 'll': '32.802955,-96.769923'}
        ,{'city': 'Daly City, CA, USA', 'll': '37.6879241,-122.4702079'}
        ,{'city': 'Danbury, CT, USA', 'll': '41.394817,-73.4540111'}
        ,{'city': 'Danville, CA, USA', 'll': '37.8215929,-121.9999606'}
        ,{'city': 'Danville, VA, USA', 'll': '36.5859718,-79.39502279999999'}
        ,{'city': 'Davenport, IA, USA', 'll': '41.5236437,-90.5776367'}
        ,{'city': 'Davie, FL, USA', 'll': '26.0628664,-80.2331038'}
        ,{'city': 'Davis, CA, USA', 'll': '38.5449065,-121.7405167'}
        ,{'city': 'Dayton, OH, USA', 'll': '39.7589478,-84.1916069'}
        ,{'city': 'Daytona Beach, FL, USA', 'll': '29.2108147,-81.0228331'}
        ,{'city': 'Dearborn, MI, USA', 'll': '42.3222599,-83.17631449999999'}
        ,{'city': 'Dearborn Heights, MI, USA', 'll': '42.3369816,-83.27326269999999'}
        ,{'city': 'Decatur, IL, USA', 'll': '39.8403147,-88.9548001'}
        ,{'city': 'Decatur, AL, USA', 'll': '34.6059253,-86.9833417'}
        ,{'city': 'Deerfield Beach, FL, USA', 'll': '26.3184123,-80.09976569999999'}
        ,{'city': 'DeKalb, IL, USA', 'll': '41.9294736,-88.75036469999999'}
        ,{'city': 'Delano, CA, USA', 'll': '35.7688425,-119.2470536'}
        ,{'city': 'Delray Beach, FL, USA', 'll': '26.4614625,-80.0728201'}
        ,{'city': 'Deltona, FL, USA', 'll': '28.9005446,-81.26367379999999'}
        ,{'city': 'Denton, TX, USA', 'll': '33.2148412,-97.13306829999999'}
        ,{'city': 'Denver, CO, USA', 'll': '39.7391536,-104.9847034'}
        ,{'city': 'Des Moines, IA, USA', 'll': '41.6005448,-93.6091064'}
        ,{'city': 'DeSoto, TX, USA', 'll': '32.5898577,-96.85694509999999'}
        ,{'city': 'Des Plaines, IL, USA', 'll': '42.0333623,-87.88339909999999'}
        ,{'city': 'Detroit, MI, USA', 'll': '42.331427,-83.0457538'}
        ,{'city': 'Michigan - Martin, Detroit, MI 48210, USA', 'll': '42.3288623,-83.1206665'}
        ,{'city': 'Diamond Bar, CA, USA', 'll': '34.0286226,-117.8103367'}
        ,{'city': 'Doral, FL, USA', 'll': '25.8195424,-80.3553302'}
        ,{'city': 'Dothan, AL, USA', 'll': '31.2232313,-85.3904888'}
        ,{'city': 'Downers Grove, IL, USA', 'll': '41.8089191,-88.01117459999999'}
        ,{'city': 'Downey, CA, USA', 'll': '33.94001430000001,-118.1325688'}
        ,{'city': 'Draper, UT, USA', 'll': '40.5246711,-111.8638226'}
        ,{'city': 'Dublin, CA, USA', 'll': '37.7021521,-121.9357918'}
        ,{'city': 'Dublin, OH, USA', 'll': '40.0992294,-83.1140771'}
        ,{'city': 'Dubuque, IA, USA', 'll': '42.5005583,-90.66457179999999'}
        ,{'city': 'Duluth, MN, USA', 'll': '46.78667189999999,-92.1004852'}
        ,{'city': 'Dundalk, MD, USA', 'll': '39.2506633,-76.5205184'}
        ,{'city': 'Dunwoody, GA, USA', 'll': '33.9462125,-84.3346473'}
        ,{'city': 'Durham, NC, USA', 'll': '35.9940329,-78.898619'}
        ,{'city': 'Eagan, MN, USA', 'll': '44.8041322,-93.1668858'}
        ,{'city': 'East Hartford, CT, USA', 'll': '41.7634219,-72.6128339'}
        ,{'city': 'Honolulu, HI, USA', 'll': '21.3069444,-157.8583333'}
        ,{'city': 'East Lansing, MI, USA', 'll': '42.7369792,-84.48386540000001'}
        ,{'city': 'East Los Angeles, CA, USA', 'll': '34.0239015,-118.1720157'}
        ,{'city': 'East Los Angeles Library, 4837 E 3rd St, Los Angeles, CA 90022, USA', 'll': '34.03369199999999,-118.160056'}
        ,{'city': 'Los Angeles, CA, USA', 'll': '34.0522342,-118.2436849'}
        ,{'city': 'East Orange, NJ, USA', 'll': '40.767323,-74.2048677'}
        ,{'city': 'East Providence, RI, USA', 'll': '41.8137116,-71.3700545'}
        ,{'city': 'Eastvale, CA 92880, USA', 'll': '33.9630573,-117.5638781'}
        ,{'city': 'Eau Claire, WI, USA', 'll': '44.811349,-91.4984941'}
        ,{'city': 'Eden Prairie, MN, USA', 'll': '44.8546856,-93.47078599999999'}
        ,{'city': 'Edina, MN, USA', 'll': '44.8896866,-93.3499489'}
        ,{'city': 'Edinburg, TX, USA', 'll': '26.3017374,-98.1633432'}
        ,{'city': 'Edmond, OK, USA', 'll': '35.6528323,-97.47809540000002'}
        ,{'city': 'El Cajon, CA, USA', 'll': '32.7947731,-116.9625269'}
        ,{'city': 'El Centro, CA, USA', 'll': '32.792,-115.5630514'}
        ,{'city': 'El Dorado Hills, CA, USA', 'll': '38.6857367,-121.082167'}
        ,{'city': 'Elgin, IL, USA', 'll': '42.0372487,-88.2811895'}
        ,{'city': 'Elizabeth, NJ, USA', 'll': '40.6639916,-74.2107006'}
        ,{'city': 'Elk Grove, CA, USA', 'll': '38.4087993,-121.3716178'}
        ,{'city': 'Elkhart, IN, USA', 'll': '41.6819935,-85.9766671'}
        ,{'city': 'Ellicott City, MD, USA', 'll': '39.2673283,-76.7983067'}
        ,{'city': 'Elmhurst, IL, USA', 'll': '41.8994744,-87.9403418'}
        ,{'city': 'El Monte, CA, USA', 'll': '34.0686206,-118.0275667'}
        ,{'city': 'El Paso, TX, USA', 'll': '31.7587198,-106.4869314'}
        ,{'city': 'El Paso', 'll': '31.8039824,-106.2051484'}
        ,{'city': 'Elyria, OH, USA', 'll': '41.3683798,-82.10764859999999'}
        ,{'city': 'Encinitas, CA, USA', 'll': '33.0369867,-117.2919818'}
        ,{'city': 'Enid, OK, USA', 'll': '36.3955891,-97.8783911'}
        ,{'city': 'Enterprise, NV, USA', 'll': '36.0252503,-115.2419419'}
        ,{'city': 'Erie, PA, USA', 'll': '42.12922409999999,-80.085059'}
        ,{'city': 'Erie, USA', 'll': '42.0366785,-80.0087746'}
        ,{'city': 'Escondido, CA, USA', 'll': '33.1192068,-117.086421'}
        ,{'city': 'Euclid, OH, USA', 'll': '41.5931049,-81.5267873'}
        ,{'city': 'Eugene, OR, USA', 'll': '44.0520691,-123.0867536'}
        ,{'city': 'Euless, TX, USA', 'll': '32.8370727,-97.08195409999999'}
        ,{'city': 'Evanston, IL, USA', 'll': '42.0411414,-87.6900587'}
        ,{'city': 'Evansville, IN, USA', 'll': '37.9715592,-87.5710898'}
        ,{'city': 'Everett, WA, USA', 'll': '47.9789848,-122.2020794'}
        ,{'city': 'Everett, MA, USA', 'll': '42.40843,-71.0536625'}
        ,{'city': 'Fairfield, CA, USA', 'll': '38.24935809999999,-122.0399663'}
        ,{'city': 'Fairfield, OH, USA', 'll': '39.3454673,-84.5603187'}
        ,{'city': 'Fall River, MA, USA', 'll': '41.7014912,-71.1550451'}
        ,{'city': 'Fargo, ND, USA', 'll': '46.8771863,-96.7898034'}
        ,{'city': 'Farmington, NM, USA', 'll': '36.72805830000001,-108.2186856'}
        ,{'city': 'Farmington Hills, MI, USA', 'll': '42.4828221,-83.41838229999999'}
        ,{'city': 'Fayetteville, NC, USA', 'll': '35.0526641,-78.87835849999999'}
        ,{'city': 'Fayetteville, AR, USA', 'll': '36.0625795,-94.1574263'}
        ,{'city': 'Federal Way, WA, USA', 'll': '47.3223221,-122.3126222'}
        ,{'city': 'Findlay, OH 45840, USA', 'll': '41.04422,-83.6499321'}
        ,{'city': 'Fishers, IN, USA', 'll': '39.9555928,-86.0138729'}
        ,{'city': 'Flagstaff, AZ, USA', 'll': '35.2013516,-111.639249'}
        ,{'city': 'Flint, MI, USA', 'll': '43.0125274,-83.6874562'}
        ,{'city': 'Flint, MI, USA', 'll': '43.0777289,-83.67739279999999'}
        ,{'city': 'Florence-Graham, CA, USA', 'll': '33.9694444,-118.2438889'}
        ,{'city': 'Florin, CA, USA', 'll': '38.4960187,-121.4088416'}
        ,{'city': 'Florissant, MO, USA', 'll': '38.789217,-90.322614'}
        ,{'city': 'Flower Mound, TX, USA', 'll': '33.0145673,-97.0969552'}
        ,{'city': 'Folsom, CA, USA', 'll': '38.6779591,-121.1760583'}
        ,{'city': 'Fond du Lac, WI, USA', 'll': '43.7730448,-88.4470508'}
        ,{'city': 'Fontana, CA, USA', 'll': '34.0922335,-117.435048'}
        ,{'city': 'Fort Collins, CO, USA', 'll': '40.5852602,-105.084423'}
        ,{'city': 'Fort Lauderdale, FL, USA', 'll': '26.1223084,-80.14337859999999'}
        ,{'city': 'Fort Myers, FL, USA', 'll': '26.640628,-81.8723084'}
        ,{'city': 'Fort Pierce, FL, USA', 'll': '27.4467056,-80.3256056'}
        ,{'city': 'Fort Smith, AR, USA', 'll': '35.3859242,-94.39854749999999'}
        ,{'city': 'Fort Wayne, IN, USA', 'll': '41.079273,-85.1393513'}
        ,{'city': 'Fort Worth, TX, USA', 'll': '32.725409,-97.3208496'}
        ,{'city': 'Fountainbleau, FL, USA', 'll': '25.7728774,-80.3478301'}
        ,{'city': 'Fountain Valley, CA, USA', 'll': '33.7091847,-117.9536697'}
        ,{'city': 'Framingham, MA, USA', 'll': '42.279286,-71.4161565'}
        ,{'city': 'Franklin, TN, USA', 'll': '35.9250637,-86.8688899'}
        ,{'city': 'Frederick, MD, USA', 'll': '39.41426879999999,-77.4105409'}
        ,{'city': 'Freeport, NY, USA', 'll': '40.6576022,-73.58318349999999'}
        ,{'city': 'Fremont, CA, USA', 'll': '37.5482697,-121.9885719'}
        ,{'city': 'Fresno, CA, USA', 'll': '36.7477272,-119.7723661'}
        ,{'city': 'Frisco, TX, USA', 'll': '33.1506744,-96.82361159999999'}
        ,{'city': 'Fullerton, CA, USA', 'll': '33.8702923,-117.925338'}
        ,{'city': 'Gainesville, FL, USA', 'll': '29.6516344,-82.32482619999999'}
        ,{'city': 'Gaithersburg, MD, USA', 'll': '39.1434406,-77.2013705'}
        ,{'city': 'Galveston, TX, USA', 'll': '29.3013479,-94.7976958'}
        ,{'city': 'Gardena, CA, USA', 'll': '33.8883487,-118.3089624'}
        ,{'city': 'Garden Grove, CA, USA', 'll': '33.7739053,-117.9414477'}
        ,{'city': 'Garland, TX, USA', 'll': '32.912624,-96.63888329999999'}
        ,{'city': 'Gary, IN, USA', 'll': '41.5933696,-87.3464271'}
        ,{'city': 'Gastonia, NC, USA', 'll': '35.262082,-81.18730049999999'}
        ,{'city': 'Georgetown, TX, USA', 'll': '30.6326942,-97.6772311'}
        ,{'city': 'Germantown, MD, USA', 'll': '39.1731621,-77.2716502'}
        ,{'city': 'Gilbert, AZ, USA', 'll': '33.3528264,-111.789027'}
        ,{'city': 'Gilroy, CA 95020, USA', 'll': '37.0057816,-121.5682751'}
        ,{'city': 'Glen Burnie, MD, USA', 'll': '39.1626084,-76.6246886'}
        ,{'city': 'Glendale, AZ, USA', 'll': '33.5386523,-112.1859866'}
        ,{'city': 'Glendale, CA, USA', 'll': '34.1425078,-118.255075'}
        ,{'city': 'Glendora, CA, USA', 'll': '34.1361187,-117.865339'}
        ,{'city': 'Glenview, IL, USA', 'll': '42.0697509,-87.7878408'}
        ,{'city': 'Goodyear, AZ, USA', 'll': '33.449806,-112.3582136'}
        ,{'city': 'Grand Forks, ND, USA', 'll': '47.9252568,-97.0328547'}
        ,{'city': 'Grand Island, NE, USA', 'll': '40.9222222,-98.35805560000001'}
        ,{'city': 'Grand Junction, CO, USA', 'll': '39.0638705,-108.5506486'}
        ,{'city': 'Grand Prairie, TX, USA', 'll': '32.7459645,-96.99778459999999'}
        ,{'city': 'Grand Rapids, MI, USA', 'll': '42.9633599,-85.6680863'}
        ,{'city': 'Grand Rapids Charter Township, MI, USA', 'll': '43.0020023,-85.57150150000001'}
        ,{'city': 'Grapevine, TX, USA', 'll': '32.9342919,-97.0780654'}
        ,{'city': 'Great Falls, Mt, USA', 'll': '47.5002354,-111.3008083'}
        ,{'city': 'Greeley, CO, USA', 'll': '40.4233142,-104.7091322'}
        ,{'city': 'Green Bay, WI, USA', 'll': '44.51915899999999,-88.019826'}
        ,{'city': 'Greensboro, NC, USA', 'll': '36.0726354,-79.7919754'}
        ,{'city': 'Greenville, NC, USA', 'll': '35.612661,-77.3663538'}
        ,{'city': 'Greenville, SC, USA', 'll': '34.85261759999999,-82.3940104'}
        ,{'city': 'Greenville, USA', 'll': '34.7074745,-82.3017728'}
        ,{'city': 'Greenwood, IN, USA', 'll': '39.6136578,-86.10665259999999'}
        ,{'city': 'Gresham, OR, USA', 'll': '45.5001357,-122.4302013'}
        ,{'city': 'Gulfport, MS, USA', 'll': '30.3674198,-89.0928155'}
        ,{'city': 'Hacienda Heights, CA, USA', 'll': '33.9930677,-117.9686755'}
        ,{'city': 'Hackensack, NJ, USA', 'll': '40.8859325,-74.0434736'}
        ,{'city': 'Haltom City, TX, USA', 'll': '32.7995738,-97.26918169999999'}
        ,{'city': 'Hamilton, OH, USA', 'll': '39.3995008,-84.5613355'}
        ,{'city': 'Hammond, IN, USA', 'll': '41.5833688,-87.5000412'}
        ,{'city': 'Hampton, VA, USA', 'll': '37.0298687,-76.34522179999999'}
        ,{'city': 'Hanford, CA 93230, USA', 'll': '36.3274502,-119.6456844'}
        ,{'city': 'Harlingen, TX, USA', 'll': '26.1906306,-97.69610259999999'}
        ,{'city': 'Harrisburg, PA, USA', 'll': '40.2737002,-76.8844179'}
        ,{'city': 'Harrisonburg, VA, USA', 'll': '38.4495688,-78.8689155'}
        ,{'city': 'Hartford, CT, USA', 'll': '41.76371109999999,-72.6850932'}
        ,{'city': 'Hattiesburg, MS, USA', 'll': '31.3271189,-89.29033919999999'}
        ,{'city': 'Haverhill, MA, USA', 'll': '42.7762015,-71.0772796'}
        ,{'city': 'Hawthorne, CA, USA', 'll': '33.9164032,-118.3525748'}
        ,{'city': 'Hayward, CA, USA', 'll': '37.6688205,-122.0807964'}
        ,{'city': 'Hemet, CA, USA', 'll': '33.7475203,-116.9719684'}
        ,{'city': 'Hempstead, NY, USA', 'll': '40.7062128,-73.6187397'}
        ,{'city': 'Henderson, NV, USA', 'll': '36.0395247,-114.9817213'}
        ,{'city': 'Hendersonville, TN, USA', 'll': '36.3047735,-86.6199957'}
        ,{'city': 'Hesperia, CA, USA', 'll': '34.4263886,-117.3008784'}
        ,{'city': 'Hialeah, FL, USA', 'll': '25.8575963,-80.2781057'}
        ,{'city': 'Hicksville, NY, USA', 'll': '40.7684331,-73.5251253'}
        ,{'city': 'Highland, CA, USA', 'll': '34.1283442,-117.2086513'}
        ,{'city': 'Highlands Ranch, CO, USA', 'll': '39.5444444,-104.9680556'}
        ,{'city': 'High Point, NC, USA', 'll': '35.9556923,-80.0053176'}
        ,{'city': 'Hillsboro, OR, USA', 'll': '45.5228939,-122.989827'}
        ,{'city': 'Hilo, HI, USA', 'll': '19.5429151,-155.6658568'}
        ,{'city': 'Hoboken, NJ, USA', 'll': '40.7439905,-74.0323626'}
        ,{'city': 'Hoffman Estates, IL, USA', 'll': '42.0629915,-88.12271989999999'}
        ,{'city': 'Hollywood, FL, USA', 'll': '26.0112014,-80.1494901'}
        ,{'city': 'Homestead, FL, USA', 'll': '25.4687224,-80.4775569'}
        ,{'city': 'Honolulu, HI, USA', 'll': '21.3069444,-157.8583333'}
        ,{'city': 'Hoover, AL, USA', 'll': '33.4053867,-86.8113781'}
        ,{'city': 'Houston, TX, USA', 'll': '29.7601927,-95.36938959999999'}
        ,{'city': 'Huntersville, NC, USA', 'll': '35.410694,-80.84285040000002'}
        ,{'city': 'Huntington, WV, USA', 'll': '38.4192496,-82.44515400000002'}
        ,{'city': 'Huntington Beach, CA, USA', 'll': '33.660297,-117.9992265'}
        ,{'city': 'Huntington Park, CA, USA', 'll': '33.9816812,-118.2250725'}
        ,{'city': 'Huntsville, AL, USA', 'll': '34.7303688,-86.5861037'}
        ,{'city': 'Hutchinson, KS, USA', 'll': '38.0608445,-97.92977429999999'}
        ,{'city': 'Idaho Falls, ID, USA', 'll': '43.49165139999999,-112.0339645'}
        ,{'city': 'Independence, MO, USA', 'll': '39.0911161,-94.41550679999999'}
        ,{'city': 'Indianapolis, IN, USA', 'll': '39.7685155,-86.1580736'}
        ,{'city': 'Indio, CA, USA', 'll': '33.7205771,-116.2155619'}
        ,{'city': 'Inglewood, CA, USA', 'll': '33.9616801,-118.3531311'}
        ,{'city': 'Iowa City, IA, USA', 'll': '41.6611277,-91.5301683'}
        ,{'city': 'Irondequoit, NY, USA', 'll': '43.2133955,-77.5797226'}
        ,{'city': 'Irvine, CA, USA', 'll': '33.6839473,-117.7946942'}
        ,{'city': 'Irving, TX, USA', 'll': '32.8140177,-96.9488945'}
        ,{'city': 'Jackson, MS, USA', 'll': '32.2987573,-90.1848103'}
        ,{'city': 'Jackson, TN, USA', 'll': '35.6145169,-88.81394689999999'}
        ,{'city': 'Jacksonville, FL, USA', 'll': '30.3321838,-81.65565099999999'}
        ,{'city': 'Jacksonville, NC, USA', 'll': '34.7540524,-77.4302414'}
        ,{'city': 'Janesville, WI, USA', 'll': '42.6827885,-89.0187222'}
        ,{'city': 'Jefferson City, MO, USA', 'll': '38.57670170000001,-92.1735164'}
        ,{'city': 'Jeffersonville, IN, USA', 'll': '38.2775702,-85.7371847'}
        ,{'city': 'Jersey City, NJ, USA', 'll': '40.72815749999999,-74.0776417'}
        ,{'city': 'Johns Creek, GA, USA', 'll': '34.0289259,-84.198579'}
        ,{'city': 'Johnson City, TN, USA', 'll': '36.3134397,-82.3534727'}
        ,{'city': 'Joliet, IL, USA', 'll': '41.525031,-88.0817251'}
        ,{'city': 'Jonesboro, AR, USA', 'll': '35.84229670000001,-90.704279'}
        ,{'city': 'Joplin, MO, USA', 'll': '37.08422710000001,-94.51328099999999'}
        ,{'city': 'Jupiter, FL, USA', 'll': '26.9342246,-80.0942087'}
        ,{'city': 'Kalamazoo, MI, USA', 'll': '42.2917069,-85.5872286'}
        ,{'city': 'Kannapolis, NC, USA', 'll': '35.4873613,-80.6217341'}
        ,{'city': 'Kansas City, MO, USA', 'll': '39.0997265,-94.5785667'}
        ,{'city': 'Kansas City, KS, USA', 'll': '39.114053,-94.6274636'}
        ,{'city': 'Kansas, IL 61933, USA', 'll': '39.5528129,-87.9394779'}
        ,{'city': 'Kansas City, USA', 'll': '39.0653602,-94.5624426'}
        ,{'city': 'Kearny, NJ, USA', 'll': '40.7684342,-74.1454214'}
        ,{'city': 'Keller, TX, USA', 'll': '32.9345701,-97.251682'}
        ,{'city': 'Kendale Lakes, FL, USA', 'll': '25.7081577,-80.4069986'}
        ,{'city': 'Kendall, FL, USA', 'll': '25.6660336,-80.357827'}
        ,{'city': 'Kenner, LA, USA', 'll': '29.9940924,-90.2417434'}
        ,{'city': 'Kennewick, WA, USA', 'll': '46.2112458,-119.1372338'}
        ,{'city': 'Kenosha, WI, USA', 'll': '42.5847425,-87.82118539999999'}
        ,{'city': 'Kent, WA, USA', 'll': '47.3809335,-122.2348431'}
        ,{'city': 'Kentwood, MI, USA', 'll': '42.8694731,-85.64474919999999'}
        ,{'city': 'Kettering, OH, USA', 'll': '39.68950359999999,-84.1688274'}
        ,{'city': 'Killeen, TX, USA', 'll': '31.1171194,-97.72779589999999'}
        ,{'city': 'Kingsport, TN, USA', 'll': '36.548434,-82.5618186'}
        ,{'city': 'Kirkland, WA, USA', 'll': '47.6814875,-122.2087353'}
        ,{'city': 'Kissimmee, FL, USA', 'll': '28.2919557,-81.40757099999999'}
        ,{'city': 'Knoxville, TN, USA', 'll': '35.9606384,-83.9207392'}
        ,{'city': 'Kokomo, IN, USA', 'll': '40.486427,-86.13360329999999'}
        ,{'city': 'Lacey, WA, USA', 'll': '47.03426289999999,-122.8231915'}
        ,{'city': 'La Crosse, WI, USA', 'll': '43.8013556,-91.23958069999999'}
        ,{'city': 'Lafayette, LA, USA', 'll': '30.2240897,-92.0198427'}
        ,{'city': 'Lafayette, IN, USA', 'll': '40.4167022,-86.87528689999999'}
        ,{'city': 'Laguna Niguel, CA, USA', 'll': '33.5225261,-117.7075526'}
        ,{'city': 'La Habra, CA, USA', 'll': '33.9319578,-117.9461734'}
        ,{'city': 'Lake Charles, LA, USA', 'll': '30.2265949,-93.2173758'}
        ,{'city': 'Lake Elsinore, CA, USA', 'll': '33.6680772,-117.3272615'}
        ,{'city': 'Lake Forest, CA, USA', 'll': '33.6469661,-117.689218'}
        ,{'city': 'Lake Havasu City, AZ, USA', 'll': '34.483901,-114.3224548'}
        ,{'city': 'Lakeland, FL, USA', 'll': '28.0394654,-81.9498042'}
        ,{'city': 'Lake Ridge, VA, USA', 'll': '38.68789400000001,-77.29776180000002'}
        ,{'city': 'Lakeville, MN, USA', 'll': '44.6496868,-93.24271999999999'}
        ,{'city': 'Lakewood, CO, USA', 'll': '39.7047095,-105.0813734'}
        ,{'city': 'Lakewood, CA, USA', 'll': '33.8536269,-118.1339563'}
        ,{'city': 'Lakewood, WA, USA', 'll': '47.1717649,-122.518458'}
        ,{'city': 'Lakewood Township, NJ, USA', 'll': '40.08212899999999,-74.2097014'}
        ,{'city': 'Lakewood, OH, USA', 'll': '41.4819932,-81.7981908'}
        ,{'city': 'La Mesa, CA, USA', 'll': '32.7678287,-117.0230839'}
        ,{'city': 'La Mirada, CA, USA', 'll': '33.9172357,-118.0120086'}
        ,{'city': 'Lancaster, CA, USA', 'll': '34.6867846,-118.1541632'}
        ,{'city': 'Lancaster, PA, USA', 'll': '40.0378755,-76.3055144'}
        ,{'city': 'Lancaster, USA', 'll': '40.0466571,-76.17837390000001'}
        ,{'city': 'Lansing, MI, USA', 'll': '42.732535,-84.5555347'}
        ,{'city': 'Lansing Charter Township, MI, USA', 'll': '42.7563594,-84.5283267'}
        ,{'city': 'La Quinta, CA, USA', 'll': '33.6633573,-116.3100095'}
        ,{'city': 'Laredo, TX, USA', 'll': '27.506407,-99.5075421'}
        ,{'city': 'Largo, FL, USA', 'll': '27.9094665,-82.7873244'}
        ,{'city': 'Las Cruces, NM, USA', 'll': '32.3199396,-106.7636538'}
        ,{'city': 'Las Vegas, NV, USA', 'll': '36.114646,-115.172816'}
        ,{'city': 'Lauderhill, FL, USA', 'll': '26.1403635,-80.2133808'}
        ,{'city': 'Lawrence, KS, USA', 'll': '38.9716689,-95.2352501'}
        ,{'city': 'Lawrence, MA, USA', 'll': '42.7070354,-71.1631137'}
        ,{'city': 'Lawrence, IN, USA', 'll': '39.8386516,-86.0252612'}
        ,{'city': 'Lawton, OK, USA', 'll': '34.6086854,-98.39033049999999'}
        ,{'city': 'Layton, UT, USA', 'll': '41.0602216,-111.9710529'}
        ,{'city': 'League City, TX, USA', 'll': '29.5074538,-95.0949303'}
        ,{'city': 'Leesburg, VA, USA', 'll': '39.1156615,-77.56360149999999'}
        ,{'city': "Lee's Summit, MO, USA", 'll': '38.916343,-94.383516'}
        ,{'city': 'Lehi, UT, USA', 'll': '40.3916172,-111.8507662'}
        ,{'city': 'Lehigh Acres, FL, USA', 'll': '26.6253497,-81.6248026'}
        ,{'city': 'Lenexa, KS, USA', 'll': '38.9536174,-94.73357089999999'}
        ,{'city': 'Levittown, PA, USA', 'll': '40.1551096,-74.8287747'}
        ,{'city': 'Levittown, NY, USA', 'll': '40.7259336,-73.51429209999999'}
        ,{'city': 'Lewisville, TX, USA', 'll': '33.046233,-96.994174'}
        ,{'city': 'Lexington, KY, USA', 'll': '38.0405837,-84.5037164'}
        ,{'city': 'Lincoln, NE, USA', 'll': '40.806862,-96.681679'}
        ,{'city': 'Lincoln, CA, USA', 'll': '38.891565,-121.2930079'}
        ,{'city': 'Linton Hall, Brentsville, VA, USA', 'll': '38.7598381,-77.5749905'}
        ,{'city': 'Little Rock, AR, USA', 'll': '34.7464809,-92.28959479999999'}
        ,{'city': 'Littleton, CO, USA', 'll': '39.613321,-105.0166498'}
        ,{'city': 'Livermore, CA, USA', 'll': '37.6818745,-121.7680088'}
        ,{'city': 'Livonia, MI, USA', 'll': '42.36837,-83.35270969999999'}
        ,{'city': 'Lodi, CA, USA', 'll': '38.1301968,-121.2724473'}
        ,{'city': 'Logan, UT, USA', 'll': '41.7354861,-111.834388'}
        ,{'city': 'Lombard, IL, USA', 'll': '41.8800296,-88.00784349999999'}
        ,{'city': 'Lompoc, CA, USA', 'll': '34.6391501,-120.4579409'}
        ,{'city': 'Long Beach, CA, USA', 'll': '33.8041667,-118.1580556'}
        ,{'city': 'Longmont, CO, USA', 'll': '40.1672068,-105.1019275'}
        ,{'city': 'Longview, TX, USA', 'll': '32.5007037,-94.74048909999999'}
        ,{'city': 'Lorain, OH, USA', 'll': '41.452819,-82.1823746'}
        ,{'city': 'Los Angeles, CA, USA', 'll': '34.0522342,-118.2436849'}
        ,{'city': 'Louisville, KY, USA', 'll': '38.2526647,-85.7584557'}
        ,{'city': 'Loveland, CO, USA', 'll': '40.3977612,-105.0749801'}
        ,{'city': 'Lowell, MA, USA', 'll': '42.6334247,-71.31617179999999'}
        ,{'city': 'Lubbock, TX, USA', 'll': '33.5778631,-101.8551665'}
        ,{'city': 'Lynchburg, VA, USA', 'll': '37.4137536,-79.14224639999999'}
        ,{'city': 'Lynn, MA, USA', 'll': '42.46676300000001,-70.9494938'}
        ,{'city': 'Lynwood, CA, USA', 'll': '33.930293,-118.2114603'}
        ,{'city': 'McAllen, TX, USA', 'll': '26.2034071,-98.23001239999999'}
        ,{'city': 'McKinney, TX, USA', 'll': '33.1972465,-96.6397822'}
        ,{'city': 'McLean, VA, USA', 'll': '38.9338676,-77.1772604'}
        ,{'city': 'Macon, GA, USA', 'll': '32.8406946,-83.6324022'}
        ,{'city': 'Madera, CA, USA', 'll': '36.9613356,-120.0607176'}
        ,{'city': 'Madison, WI, USA', 'll': '43.0730517,-89.4012302'}
        ,{'city': 'Madison, AL, USA', 'll': '34.6992579,-86.74833180000002'}
        ,{'city': 'Malden, MA, USA', 'll': '42.4250964,-71.066163'}
        ,{'city': 'Manchester, NH, USA', 'll': '42.9956397,-71.4547891'}
        ,{'city': 'Manhattan, KS, USA', 'll': '39.18360819999999,-96.57166939999999'}
        ,{'city': 'Mansfield, TX, USA', 'll': '32.5631924,-97.1416768'}
        ,{'city': 'Mansfield, OH, USA', 'll': '40.75839,-82.5154471'}
        ,{'city': 'Manteca, CA, USA', 'll': '37.7974273,-121.2160526'}
        ,{'city': 'Maple Grove, MN, USA', 'll': '45.0724642,-93.4557877'}
        ,{'city': 'Margate, FL, USA', 'll': '26.2445263,-80.206436'}
        ,{'city': 'Maricopa, AZ, USA', 'll': '33.0581063,-112.0476423'}
        ,{'city': 'Marietta, GA, USA', 'll': '33.95260200000001,-84.5499327'}
        ,{'city': 'Marysville, WA, USA', 'll': '48.0517637,-122.1770818'}
        ,{'city': 'Medford, OR, USA', 'll': '42.3265152,-122.8755949'}
        ,{'city': 'Medford, MA, USA', 'll': '42.4184296,-71.1061639'}
        ,{'city': 'Melbourne, FL, USA', 'll': '28.0836269,-80.60810889999999'}
        ,{'city': 'Memphis, TN, USA', 'll': '35.1495343,-90.0489801'}
        ,{'city': 'Menifee, Sun City, CA, USA', 'll': '33.692372,-117.1884585'}
        ,{'city': 'Mentor, OH, USA', 'll': '41.6661573,-81.339552'}
        ,{'city': 'Merced, CA, USA', 'll': '37.3021632,-120.4829677'}
        ,{'city': 'Meriden, CT, USA', 'll': '41.5381535,-72.80704349999999'}
        ,{'city': 'Meridian, ID, USA', 'll': '43.6121087,-116.3915131'}
        ,{'city': 'Meridian, MS, USA', 'll': '32.3643098,-88.703656'}
        ,{'city': 'Mesa, AZ, USA', 'll': '33.4151843,-111.8314724'}
        ,{'city': 'Mesquite, TX, USA', 'll': '32.76679550000001,-96.5991593'}
        ,{'city': 'Metairie, LA, USA', 'll': '29.9840922,-90.1528519'}
        ,{'city': 'Methuen, MA, USA', 'll': '42.7262016,-71.1908924'}
        ,{'city': 'Miami, FL, USA', 'll': '25.7889689,-80.2264393'}
        ,{'city': 'Miami Gardens, FL, USA', 'll': '25.9420377,-80.2456045'}
        ,{'city': 'Middletown, OH, USA', 'll': '39.5150576,-84.39827629999999'}
        ,{'city': 'Middletown, CT, USA', 'll': '41.5623209,-72.6506488'}
        ,{'city': 'Midland, TX, USA', 'll': '31.9973456,-102.0779146'}
        ,{'city': 'Midland, MI, USA', 'll': '43.6155825,-84.2472116'}
        ,{'city': 'Midland, MI, USA', 'll': '43.57509779999999,-84.3542049'}
        ,{'city': 'Midwest City, OK, USA', 'll': '35.4495065,-97.3967019'}
        ,{'city': 'Milford, CT, USA', 'll': '41.2308945,-73.0635844'}
        ,{'city': 'Millcreek, UT, USA', 'll': '40.6868914,-111.8754907'}
        ,{'city': 'Milpitas, CA, USA', 'll': '37.4282724,-121.9066238'}
        ,{'city': 'Milwaukee, WI, USA', 'll': '43.0389025,-87.9064736'}
        ,{'city': 'Minneapolis, MN, USA', 'll': '44.9799654,-93.26383609999999'}
        ,{'city': 'Minnetonka, MN, USA', 'll': '44.9211836,-93.4687489'}
        ,{'city': 'Minot, ND, USA', 'll': '48.2325095,-101.2962732'}
        ,{'city': 'Miramar, FL, USA', 'll': '25.9756704,-80.28675009999999'}
        ,{'city': 'Mishawaka, IN, USA', 'll': '41.6619927,-86.15861559999999'}
        ,{'city': 'Mission, TX, USA', 'll': '26.2159066,-98.32529319999999'}
        ,{'city': 'Mission Viejo, CA, USA', 'll': '33.6000232,-117.6719953'}
        ,{'city': 'Missoula, Mt, USA', 'll': '46.8605189,-114.019501'}
        ,{'city': 'Missouri City, TX, USA', 'll': '29.6185669,-95.5377215'}
        ,{'city': 'Mobile, AL, USA', 'll': '30.6943566,-88.04305409999999'}
        ,{'city': 'Mobile, USA', 'll': '30.7921394,-88.24611829999999'}
        ,{'city': 'Modesto, CA, USA', 'll': '37.63909719999999,-120.9968782'}
        ,{'city': 'Moline, IL, USA', 'll': '41.5067003,-90.51513419999999'}
        ,{'city': 'Monroe, LA, USA', 'll': '32.5093109,-92.1193012'}
        ,{'city': 'Montebello, CA, USA', 'll': '34.0165053,-118.1137535'}
        ,{'city': 'Monterey Park, CA, USA', 'll': '34.0625106,-118.1228476'}
        ,{'city': 'Montgomery, AL, USA', 'll': '32.3668052,-86.2999689'}
        ,{'city': 'Moore, OK, USA', 'll': '35.3395079,-97.48670279999999'}
        ,{'city': 'Moreno Valley, CA, USA', 'll': '33.9424658,-117.2296717'}
        ,{'city': 'Mountain View, CA, USA', 'll': '37.3860517,-122.0838511'}
        ,{'city': 'Mt Pleasant, SC, USA', 'll': '32.7940651,-79.8625851'}
        ,{'city': 'Mt Prospect, IL, USA', 'll': '42.0664167,-87.9372908'}
        ,{'city': 'Mt Vernon, NY, USA', 'll': '40.9125992,-73.8370786'}
        ,{'city': 'Muncie, IN, USA', 'll': '40.1933767,-85.3863599'}
        ,{'city': 'Murfreesboro, TN, USA', 'll': '35.8456213,-86.39027'}
        ,{'city': 'Murray, UT, USA', 'll': '40.6668916,-111.8879909'}
        ,{'city': 'Murrieta, CA, USA', 'll': '33.5539143,-117.2139232'}
        ,{'city': 'Nampa, ID, USA', 'll': '43.5407172,-116.5634624'}
        ,{'city': 'Napa, CA, USA', 'll': '38.3047222,-122.2988889'}
        ,{'city': 'Napa, CA, USA', 'll': '38.5024689,-122.2653887'}
        ,{'city': 'Naperville, IL, USA', 'll': '41.7858629,-88.1472893'}
        ,{'city': 'Nashua, NH, USA', 'll': '42.7653662,-71.46756599999999'}
        ,{'city': 'Nashville, TN, USA', 'll': '36.1658899,-86.7844432'}
        ,{'city': 'National City, CA, USA', 'll': '32.6781085,-117.0991967'}
        ,{'city': 'Newark, NJ, USA', 'll': '40.735657,-74.1723667'}
        ,{'city': 'Newark, OH, USA', 'll': '40.0581205,-82.4012642'}
        ,{'city': 'Newark, CA, USA', 'll': '37.5296593,-122.0402399'}
        ,{'city': 'New Bedford, MA, USA', 'll': '41.6362152,-70.93420499999999'}
        ,{'city': 'New Braunfels, TX, USA', 'll': '29.7030024,-98.1244531'}
        ,{'city': 'New Britain, CT, USA', 'll': '41.6612104,-72.7795419'}
        ,{'city': 'New Brunswick, NJ, USA', 'll': '40.4862157,-74.4518188'}
        ,{'city': 'New Haven, CT, USA', 'll': '41.3081527,-72.9281577'}
        ,{'city': 'New Orleans, LA, USA', 'll': '29.95106579999999,-90.0715323'}
        ,{'city': 'Newport Beach, CA, USA', 'll': '33.6189101,-117.9289469'}
        ,{'city': 'Newport News, VA, USA', 'll': '37.0870821,-76.4730122'}
        ,{'city': 'New Rochelle, NY, USA', 'll': '40.9114882,-73.7823549'}
        ,{'city': 'Newton, MA, USA', 'll': '42.3370413,-71.20922139999999'}
        ,{'city': 'New York, NY, USA', 'll': '40.7143528,-74.00597309999999'}
        ,{'city': 'Manhattan, New York, NY, USA', 'll': '40.7834345,-73.9662495'}
        ,{'city': 'Niagara Falls, NY, USA', 'll': '43.0962143,-79.0377388'}
        ,{'city': 'Niagara Falls, ON, Canada', 'll': '43.0903891,-79.08610759999999'}
        ,{'city': 'Noblesville, IN, USA', 'll': '40.0455917,-86.0085955'}
        ,{'city': 'Norfolk, VA, USA', 'll': '36.8507689,-76.28587259999999'}
        ,{'city': 'Normal, IL, USA', 'll': '40.5142026,-88.9906312'}
        ,{'city': 'Norman, OK, USA', 'll': '35.2225668,-97.4394777'}
        ,{'city': 'North Atlanta, GA, USA', 'll': '33.8651033,-84.3365917'}
        ,{'city': 'North Attleboro, MA, USA', 'll': '41.9695516,-71.35654389999999'}
        ,{'city': 'North Bethesda, MD, USA', 'll': '39.0445535,-77.11886779999999'}
        ,{'city': 'North Charleston, SC, USA', 'll': '32.8546197,-79.9748103'}
        ,{'city': 'North Highlands, CA, USA', 'll': '38.6857362,-121.3721745'}
        ,{'city': 'North Las Vegas, NV, USA', 'll': '36.1988592,-115.1175013'}
        ,{'city': 'North Lauderdale, FL, USA', 'll': '26.217305,-80.2258811'}
        ,{'city': 'North Little Rock, AR, USA', 'll': '34.769536,-92.2670941'}
        ,{'city': 'North Miami, FL, USA', 'll': '25.8900949,-80.1867138'}
        ,{'city': 'North Miami Beach, FL, USA', 'll': '25.9331488,-80.1625463'}
        ,{'city': 'North Port, FL, USA', 'll': '27.044224,-82.2359254'}
        ,{'city': 'North Richland Hills, TX, USA', 'll': '32.8342952,-97.2289029'}
        ,{'city': 'Norwalk, CA, USA', 'll': '33.9022367,-118.081733'}
        ,{'city': 'Norwalk, CT, USA', 'll': '41.1175966,-73.40789680000002'}
        ,{'city': 'Novato, CA, USA', 'll': '38.1074198,-122.5697032'}
        ,{'city': 'Novi, MI, USA', 'll': '42.48059,-83.4754913'}
        ,{'city': 'Oakland, CA, USA', 'll': '37.8043637,-122.2711137'}
        ,{'city': 'Oakland Park, FL, USA', 'll': '26.1723065,-80.1319893'}
        ,{'city': 'Oak Lawn, IL, USA', 'll': '41.7108662,-87.7581081'}
        ,{'city': 'Oak Park, IL, USA', 'll': '41.8850317,-87.7845025'}
        ,{'city': 'Ocala, FL, USA', 'll': '29.1871986,-82.14009229999999'}
        ,{'city': 'Oceanside, CA, USA', 'll': '33.1958696,-117.3794834'}
        ,{'city': 'Odenton, MD, USA', 'll': '39.0839981,-76.7002462'}
        ,{'city': 'Odessa, TX, USA', 'll': '31.8456816,-102.3676431'}
        ,{'city': "O'Fallon, MO, USA", 'll': '38.8106075,-90.69984769999999'}
        ,{'city': 'Ogden, UT, USA', 'll': '41.223,-111.9738304'}
        ,{'city': 'Oklahoma City, OK, USA', 'll': '35.4675602,-97.5164276'}
        ,{'city': 'Oklahoma City, OK, USA', 'll': '35.5006256,-97.6114217'}
        ,{'city': 'Olathe, KS, USA', 'll': '38.8813958,-94.81912849999999'}
        ,{'city': 'Olympia, WA, USA', 'll': '47.0378741,-122.9006951'}
        ,{'city': 'Omaha, NE, USA', 'll': '41.2523634,-95.99798829999999'}
        ,{'city': 'Ontario, CA, USA', 'll': '34.0633443,-117.6508876'}
        ,{'city': 'Orange, CA, USA', 'll': '33.7877944,-117.8531119'}
        ,{'city': 'Orem, UT, USA', 'll': '40.2968979,-111.6946475'}
        ,{'city': 'Orlando, FL, USA', 'll': '28.5383355,-81.3792365'}
        ,{'city': 'Orland Park, IL, USA', 'll': '41.6303103,-87.85394250000002'}
        ,{'city': 'Oro Valley, AZ, USA', 'll': '32.3909071,-110.966488'}
        ,{'city': 'Oshkosh, WI, USA', 'll': '44.0247062,-88.5426136'}
        ,{'city': 'Overland Park, KS, USA', 'll': '38.9822282,-94.6707917'}
        ,{'city': 'Owensboro, KY, USA', 'll': '37.7719074,-87.1111676'}
        ,{'city': 'Oxnard, CA, USA', 'll': '34.1975048,-119.1770516'}
        ,{'city': 'Palatine, IL, USA', 'll': '42.1103041,-88.03424000000001'}
        ,{'city': 'Palm Bay, FL, USA', 'll': '28.0344621,-80.5886646'}
        ,{'city': 'Palm Beach Gardens, FL, USA', 'll': '26.8233946,-80.13865469999999'}
        ,{'city': 'Palm Coast, FL, USA', 'll': '29.5849736,-81.2078411'}
        ,{'city': 'Palmdale, CA, USA', 'll': '34.5794343,-118.1164613'}
        ,{'city': 'Palm Desert, CA, USA', 'll': '33.7222445,-116.3744556'}
        ,{'city': 'Palm Harbor, FL, USA', 'll': '28.0780718,-82.7637127'}
        ,{'city': 'Palm Springs, CA, USA', 'll': '33.8302961,-116.5452921'}
        ,{'city': 'Palo Alto, CA, USA', 'll': '37.4418834,-122.1430195'}
        ,{'city': 'Paradise, NV, USA', 'll': '36.0971945,-115.1466648'}
        ,{'city': 'Paramount, CA, USA', 'll': '33.8894598,-118.1597911'}
        ,{'city': 'Parker, CO, USA', 'll': '39.5186002,-104.7613633'}
        ,{'city': 'Parma, OH, USA', 'll': '41.4047742,-81.7229086'}
        ,{'city': 'Pasadena, TX, USA', 'll': '29.6910625,-95.2091006'}
        ,{'city': 'Pasadena, CA, USA', 'll': '34.1477849,-118.1445155'}
        ,{'city': 'Pasco, WA, USA', 'll': '46.2395793,-119.1005657'}
        ,{'city': 'Passaic, NJ, USA', 'll': '40.8567662,-74.1284764'}
        ,{'city': 'Paterson, NJ, USA', 'll': '40.9167654,-74.17181099999999'}
        ,{'city': 'Pawtucket, RI, USA', 'll': '41.878711,-71.38255579999999'}
        ,{'city': 'Peabody, MA, USA', 'll': '42.5278731,-70.9286609'}
        ,{'city': 'Pearland, TX, USA', 'll': '29.5635666,-95.2860474'}
        ,{'city': 'Pearl City, HI, USA', 'll': '21.3972222,-157.9733333'}
        ,{'city': 'Pembroke Pines, FL, USA', 'll': '26.0122378,-80.3152233'}
        ,{'city': 'Pensacola, FL, USA', 'll': '30.42130899999999,-87.2169149'}
        ,{'city': 'Peoria, AZ, USA', 'll': '33.5805955,-112.2373779'}
        ,{'city': 'Peoria, IL, USA', 'll': '40.6936488,-89.5889864'}
        ,{'city': 'Perris, CA, USA', 'll': '33.7825194,-117.2286478'}
        ,{'city': 'Perth Amboy, NJ, USA', 'll': '40.5067723,-74.2654234'}
        ,{'city': 'Petaluma, CA, USA', 'll': '38.232417,-122.6366524'}
        ,{'city': 'Pflugerville, TX, USA', 'll': '30.4393696,-97.62000429999999'}
        ,{'city': 'Pharr, TX, USA', 'll': '26.1947962,-98.1836216'}
        ,{'city': 'Philadelphia, PA, USA', 'll': '39.952335,-75.16378900000001'}
        ,{'city': 'Phoenix, AZ, USA', 'll': '33.4483771,-112.0740373'}
        ,{'city': 'Pico Rivera, CA, USA', 'll': '33.9830688,-118.096735'}
        ,{'city': 'Pine Bluff, AR, USA', 'll': '34.2284312,-92.00319549999999'}
        ,{'city': 'Pine Hills, FL, USA', 'll': '28.5577794,-81.4534046'}
        ,{'city': 'Pinellas Park, FL, USA', 'll': '27.8428025,-82.6995443'}
        ,{'city': 'Pittsburg, CA, USA', 'll': '38.0279762,-121.8846806'}
        ,{'city': 'California-Kirkbride, Pittsburgh, PA, USA', 'll': '40.4600435,-80.0213538'}
        ,{'city': 'Pittsburgh, PA, USA', 'll': '40.44062479999999,-79.9958864'}
        ,{'city': 'Pittsfield, MA, USA', 'll': '42.4500845,-73.2453824'}
        ,{'city': 'Placentia, CA, USA', 'll': '33.8722371,-117.8703363'}
        ,{'city': 'Plainfield, NJ, USA', 'll': '40.6337136,-74.4073736'}
        ,{'city': 'Plainfield, IL, USA', 'll': '41.615915,-88.20406899999999'}
        ,{'city': 'Plano, TX, USA', 'll': '33.0198431,-96.6988856'}
        ,{'city': 'Plantation, FL, USA', 'll': '26.1275862,-80.23310359999999'}
        ,{'city': 'Pleasanton, CA, USA', 'll': '37.6624312,-121.8746789'}
        ,{'city': 'Plymouth, MN, USA', 'll': '45.0105194,-93.4555093'}
        ,{'city': 'Pocatello, ID, USA', 'll': '42.8713032,-112.4455344'}
        ,{'city': 'Poinciana, FL, USA', 'll': '28.1558333,-81.47638889999999'}
        ,{'city': 'Poinciana, FL, USA', 'll': '28.1402939,-81.4584058'}
        ,{'city': 'Pomona, CA, USA', 'll': '34.0552267,-117.7523048'}
        ,{'city': 'Pompano Beach, FL, USA', 'll': '26.2378597,-80.1247667'}
        ,{'city': 'Pontiac, MI, USA', 'll': '42.6389216,-83.29104679999999'}
        ,{'city': 'Portage, MI, USA', 'll': '42.2011538,-85.5800022'}
        ,{'city': 'Portage Township, MI, USA', 'll': '46.9338608,-88.66166109999999'}
        ,{'city': 'Port Arthur, TX, USA', 'll': '29.8849504,-93.93994699999999'}
        ,{'city': 'Port Charlotte, FL, USA', 'll': '26.9761707,-82.09064479999999'}
        ,{'city': 'Porterville, CA 93257, USA', 'll': '36.06523,-119.0167679'}
        ,{'city': 'Portland, OR, USA', 'll': '45.5234515,-122.6762071'}
        ,{'city': 'Portland, ME, USA', 'll': '43.66147100000001,-70.2553259'}
        ,{'city': 'Port Orange, FL, USA', 'll': '29.1383165,-80.9956105'}
        ,{'city': 'Port St Lucie, FL, USA', 'll': '27.2758333,-80.35499999999999'}
        ,{'city': 'Portsmouth, VA, USA', 'll': '36.8354258,-76.2982742'}
        ,{'city': 'Potomac, MD, USA', 'll': '39.0181651,-77.2085914'}
        ,{'city': 'North Branch Potomac River, United States', 'll': '39.3270677,-79.2802633'}
        ,{'city': 'Poway, CA, USA', 'll': '32.9628232,-117.0358646'}
        ,{'city': 'Prescott, AZ, USA', 'll': '34.5400242,-112.4685025'}
        ,{'city': 'Prescott Valley, AZ, USA', 'll': '34.6100243,-112.315721'}
        ,{'city': 'Providence, RI, USA', 'll': '41.8239891,-71.4128343'}
        ,{'city': 'Provo, UT, USA', 'll': '40.2338438,-111.6585337'}
        ,{'city': 'Pueblo, CO, USA', 'll': '38.2544472,-104.6091409'}
        ,{'city': 'Quincy, MA, USA', 'll': '42.2528772,-71.0022705'}
        ,{'city': 'Racine, WI, USA', 'll': '42.7261309,-87.78285230000002'}
        ,{'city': 'Raleigh, NC, USA', 'll': '35.772096,-78.6386145'}
        ,{'city': 'Rancho Cordova, CA, USA', 'll': '38.5890723,-121.302728'}
        ,{'city': 'Rancho Cucamonga, CA, USA', 'll': '34.10639889999999,-117.5931084'}
        ,{'city': 'Rancho Palos Verdes, CA, USA', 'll': '33.7444613,-118.3870173'}
        ,{'city': 'Rancho Santa Margarita, CA, USA', 'll': '33.640855,-117.603104'}
        ,{'city': 'Rapid City, SD, USA', 'll': '44.0805434,-103.2310149'}
        ,{'city': 'Reading, PA, USA', 'll': '40.3356483,-75.9268747'}
        ,{'city': 'Redding, CA, USA', 'll': '40.5865396,-122.3916754'}
        ,{'city': 'Redlands, CA, USA', 'll': '34.0555693,-117.1825381'}
        ,{'city': 'Redmond, WA, USA', 'll': '47.6739881,-122.121512'}
        ,{'city': 'Redondo Beach, CA, USA', 'll': '33.8491816,-118.3884078'}
        ,{'city': 'Redwood City, CA, USA', 'll': '37.48521520000001,-122.2363548'}
        ,{'city': 'Reno, NV, USA', 'll': '39.5296329,-119.8138027'}
        ,{'city': 'Renton, WA, USA', 'll': '47.48287759999999,-122.2170661'}
        ,{'city': 'Reston, VA, USA', 'll': '38.9586307,-77.35700279999999'}
        ,{'city': 'Revere, MA, USA', 'll': '42.4084302,-71.0119948'}
        ,{'city': 'Rialto, CA, USA', 'll': '34.1064001,-117.3703235'}
        ,{'city': 'Richardson, TX, USA', 'll': '32.9481789,-96.7297205'}
        ,{'city': 'Richland, WA, USA', 'll': '46.2856907,-119.2844621'}
        ,{'city': 'Richmond, VA, USA', 'll': '37.5407246,-77.4360481'}
        ,{'city': 'Richmond, CA, USA', 'll': '37.9357576,-122.3477486'}
        ,{'city': 'Rio Rancho, NM, USA', 'll': '35.2327544,-106.6630437'}
        ,{'city': 'Riverside, CA, USA', 'll': '33.9533487,-117.3961564'}
        ,{'city': 'Riverton, UT, USA', 'll': '40.521893,-111.9391023'}
        ,{'city': 'Riverview, FL, USA', 'll': '27.8661364,-82.32648089999999'}
        ,{'city': 'Roanoke, VA, USA', 'll': '37.2709704,-79.9414266'}
        ,{'city': 'Roanoke, USA', 'll': '37.30084850000001,-80.0087746'}
        ,{'city': 'Rochester, NY, USA', 'll': '43.16103,-77.6109219'}
        ,{'city': 'Rochester, MN, USA', 'll': '44.0216306,-92.4698992'}
        ,{'city': 'Rochester Hills, MI, USA', 'll': '42.65836609999999,-83.1499322'}
        ,{'city': 'Rockford, IL, USA', 'll': '42.2711311,-89.0939952'}
        ,{'city': 'Rock Hill, SC, USA', 'll': '34.9248667,-81.02507840000001'}
        ,{'city': 'Rocklin, CA, USA', 'll': '38.7907339,-121.2357828'}
        ,{'city': 'Rockville, MD, USA', 'll': '39.0839973,-77.1527578'}
        ,{'city': 'Rockwall, TX, USA', 'll': '32.93123360000001,-96.4597089'}
        ,{'city': 'Rocky Mt, NC, USA', 'll': '35.9382103,-77.7905339'}
        ,{'city': 'Rogers, AR, USA', 'll': '36.3320196,-94.1185366'}
        ,{'city': 'Rohnert Park, CA, USA', 'll': '38.3396367,-122.7010984'}
        ,{'city': 'Romeoville, IL, USA', 'll': '41.6475306,-88.0895061'}
        ,{'city': 'Rosemead, CA, USA', 'll': '34.0805651,-118.072846'}
        ,{'city': 'Roseville, CA, USA', 'll': '38.7521235,-121.2880059'}
        ,{'city': 'Roseville, MI, USA', 'll': '42.4972583,-82.9371409'}
        ,{'city': 'Roswell, GA, USA', 'll': '34.02315530000001,-84.3615928'}
        ,{'city': 'Roswell, NM, USA', 'll': '33.3942655,-104.5230242'}
        ,{'city': 'Round Rock, TX, USA', 'll': '30.5082551,-97.678896'}
        ,{'city': 'Rowland Heights, CA, USA', 'll': '33.9761238,-117.9053395'}
        ,{'city': 'Rowlett, TX, USA', 'll': '32.9029017,-96.56388'}
        ,{'city': 'Royal Oak, MI, USA', 'll': '42.4894801,-83.1446485'}
        ,{'city': 'Sacramento, CA, USA', 'll': '38.5815719,-121.4943996'}
        ,{'city': 'Saginaw, MI, USA', 'll': '43.4194699,-83.9508068'}
        ,{'city': 'St Charles, MO, USA', 'll': '38.7833333,-90.5166667'}
        ,{'city': 'St Clair Shores, MI, USA', 'll': '42.4931,-82.8911339'}
        ,{'city': 'St Cloud, MN, USA', 'll': '45.5538889,-94.1702778'}
        ,{'city': 'St George, UT, USA', 'll': '37.0952778,-113.5780556'}
        ,{'city': 'St Joseph, MO, USA', 'll': '39.7577778,-94.83638889999999'}
        ,{'city': 'St Louis, MO, USA', 'll': '38.6270025,-90.19940419999999'}
        ,{'city': 'St Louis Park, MN, USA', 'll': '44.9597376,-93.3702186'}
        ,{'city': 'St Paul, MN, USA', 'll': '44.95416669999999,-93.11388889999999'}
        ,{'city': 'St Peters, MO, USA', 'll': '38.778475,-90.60528099999999'}
        ,{'city': 'St Petersburg, FL, USA', 'll': '27.7730556,-82.64'}
        ,{'city': 'Salem, OR, USA', 'll': '44.9428975,-123.0350963'}
        ,{'city': 'Salem, MA, USA', 'll': '42.51954,-70.8967155'}
        ,{'city': 'Salina, KS, USA', 'll': '38.8402805,-97.61142369999999'}
        ,{'city': 'Salinas, CA, USA', 'll': '36.6777372,-121.6555013'}
        ,{'city': 'Salt Lake City, UT, USA', 'll': '40.7607793,-111.8910474'}
        ,{'city': 'Sammamish, WA, USA', 'll': '47.64176639999999,-122.0803998'}
        ,{'city': 'San Angelo, TX, USA', 'll': '31.4637723,-100.4370375'}
        ,{'city': 'San Antonio, TX, USA', 'll': '29.4241219,-98.49362819999999'}
        ,{'city': 'San Bernardino, CA, USA', 'll': '34.1083449,-117.2897652'}
        ,{'city': 'San Bruno, CA, USA', 'll': '37.6304904,-122.4110835'}
        ,{'city': 'Ventura, CA, USA', 'll': '34.2746405,-119.2290053'}
        ,{'city': 'San Clemente, CA, USA', 'll': '33.4269728,-117.6119925'}
        ,{'city': 'San Diego, CA, USA', 'll': '32.7153292,-117.1572551'}
        ,{'city': 'Sandy, UT, USA', 'll': '40.57250000000001,-111.8597222'}
        ,{'city': 'Sandy Springs, GA, USA', 'll': '33.9242688,-84.3785379'}
        ,{'city': 'Sanford, FL, USA', 'll': '28.7588218,-81.29417939999999'}
        ,{'city': 'San Francisco, CA, USA', 'll': '37.7749295,-122.4194155'}
        ,{'city': 'San Jacinto, CA, USA', 'll': '33.7839084,-116.958635'}
        ,{'city': 'San Jose, CA, USA', 'll': '37.3393857,-121.8949555'}
        ,{'city': 'San Leandro, CA, USA', 'll': '37.7249296,-122.1560768'}
        ,{'city': 'San Luis Obispo, CA, USA', 'll': '35.2827524,-120.6596156'}
        ,{'city': 'San Marcos, CA, USA', 'll': '33.1433723,-117.1661449'}
        ,{'city': 'San Marcos, TX, USA', 'll': '29.8832749,-97.9413941'}
        ,{'city': 'San Mateo, CA, USA', 'll': '37.5629917,-122.3255254'}
        ,{'city': 'San Rafael, CA, USA', 'll': '37.9735346,-122.5310874'}
        ,{'city': 'San Ramon, CA, USA', 'll': '37.7799273,-121.9780153'}
        ,{'city': 'Santa Ana, CA, USA', 'll': '33.7455731,-117.8678338'}
        ,{'city': 'Santa Barbara, CA, USA', 'll': '34.4208305,-119.6981901'}
        ,{'city': 'Santa Clara, CA, USA', 'll': '37.3541079,-121.9552356'}
        ,{'city': 'Santa Clarita, CA, USA', 'll': '34.3916641,-118.542586'}
        ,{'city': 'Santa Cruz, CA, USA', 'll': '36.9741171,-122.0307963'}
        ,{'city': 'Santa Fe, NM, USA', 'll': '35.6869752,-105.937799'}
        ,{'city': 'Santa Maria, CA, USA', 'll': '34.9530337,-120.4357191'}
        ,{'city': 'Santa Monica, CA, USA', 'll': '34.0194543,-118.4911912'}
        ,{'city': 'San Tan Valley, AZ, USA', 'll': '33.1702778,-111.5722222'}
        ,{'city': 'Santa Rosa, CA, USA', 'll': '38.4404674,-122.7144314'}
        ,{'city': 'Santee, CA, USA', 'll': '32.8383828,-116.9739167'}
        ,{'city': 'Sarasota, FL, USA', 'll': '27.3364347,-82.53065269999999'}
        ,{'city': 'Savannah, GA, USA', 'll': '32.0835407,-81.09983419999999'}
        ,{'city': 'Sayreville, NJ, USA', 'll': '40.45940210000001,-74.360846'}
        ,{'city': 'Schaumburg, IL, USA', 'll': '42.0333607,-88.0834059'}
        ,{'city': 'Schenectady, NY, USA', 'll': '42.8142432,-73.9395687'}
        ,{'city': 'Scottsdale, AZ, USA', 'll': '33.4941704,-111.9260519'}
        ,{'city': 'Scranton, PA, USA', 'll': '41.408969,-75.66241219999999'}
        ,{'city': 'Seattle, WA, USA', 'll': '47.6062095,-122.3320708'}
        ,{'city': 'Severn, MD, USA', 'll': '39.1370528,-76.6983022'}
        ,{'city': 'Shakopee, MN, USA', 'll': '44.7973962,-93.5272861'}
        ,{'city': 'Shawnee, KS, USA', 'll': '39.02284849999999,-94.7151865'}
        ,{'city': 'Sheboygan, WI, USA', 'll': '43.7508284,-87.71453'}
        ,{'city': 'Shoreline, WA, USA', 'll': '47.7556531,-122.3415178'}
        ,{'city': 'Shreveport, LA, USA', 'll': '32.5251516,-93.7501789'}
        ,{'city': 'Sierra Vista, AZ, USA', 'll': '31.5455001,-110.2772856'}
        ,{'city': 'Silver Spring, MD, USA', 'll': '38.99066570000001,-77.026088'}
        ,{'city': 'Simi Valley, CA, USA', 'll': '34.2694474,-118.781482'}
        ,{'city': 'Sioux City, IA, USA', 'll': '42.4999942,-96.40030689999999'}
        ,{'city': 'Sioux Falls, SD, USA', 'll': '43.5499749,-96.700327'}
        ,{'city': 'Skokie, IL, USA', 'll': '42.0333636,-87.7333934'}
        ,{'city': 'Smyrna, GA, USA', 'll': '33.8839926,-84.51437609999999'}
        ,{'city': 'Smyrna, TN, USA', 'll': '35.9828412,-86.5186045'}
        ,{'city': 'Somerville, MA, USA', 'll': '42.3875968,-71.0994968'}
        ,{'city': 'Southaven, MS, USA', 'll': '34.9889818,-90.0125913'}
        ,{'city': 'South Bend, IN, USA', 'll': '41.6833813,-86.25000659999999'}
        ,{'city': 'Southfield, MI, USA', 'll': '42.4733688,-83.2218731'}
        ,{'city': 'South Gate, CA, USA', 'll': '33.954737,-118.2120161'}
        ,{'city': 'South Hill, WA, USA', 'll': '47.1412122,-122.2701183'}
        ,{'city': 'South Jordan, UT, USA', 'll': '40.5621704,-111.929658'}
        ,{'city': 'South San Francisco, CA, USA', 'll': '37.654656,-122.4077498'}
        ,{'city': 'South Valley, NM, USA', 'll': '35.0100487,-106.6780809'}
        ,{'city': 'South Whittier, CA, USA', 'll': '33.9347222,-118.0308333'}
        ,{'city': 'Sparks, NV, USA', 'll': '39.5349112,-119.7526886'}
        ,{'city': 'Spokane, WA, USA', 'll': '47.6587802,-117.4260466'}
        ,{'city': 'Spokane, USA', 'll': '47.5909399,-117.2776573'}
        ,{'city': 'Spokane Valley, WA, USA', 'll': '47.6732281,-117.2393748'}
        ,{'city': 'Spring, TX, USA', 'll': '30.0799405,-95.41716009999999'}
        ,{'city': 'Springdale, AR, USA', 'll': '36.18674420000001,-94.1288141'}
        ,{'city': 'Springfield, MO, USA', 'll': '37.2089572,-93.29229889999999'}
        ,{'city': 'Springfield, MA, USA', 'll': '42.1014831,-72.589811'}
        ,{'city': 'Springfield, IL, USA', 'll': '39.78172130000001,-89.6501481'}
        ,{'city': 'Springfield, OR, USA', 'll': '44.0462362,-123.0220289'}
        ,{'city': 'Springfield, OH, USA', 'll': '39.9242266,-83.8088171'}
        ,{'city': 'Spring Hill, FL, USA', 'll': '28.4831682,-82.5369872'}
        ,{'city': 'Spring Valley, NV, USA', 'll': '36.1080258,-115.2450006'}
        ,{'city': 'Stamford, CT, USA', 'll': '41.0534302,-73.5387341'}
        ,{'city': 'State College, PA, USA', 'll': '40.7933949,-77.8600012'}
        ,{'city': 'Sterling Heights, MI, USA', 'll': '42.5803122,-83.0302033'}
        ,{'city': 'Stillwater, OK, USA', 'll': '36.1156071,-97.0583681'}
        ,{'city': 'Stockton, CA, USA', 'll': '37.9577016,-121.2907796'}
        ,{'city': 'Stratford, CT, USA', 'll': '41.18454149999999,-73.1331651'}
        ,{'city': 'Strongsville, OH, USA', 'll': '41.3144966,-81.83569'}
        ,{'city': 'Suffolk, VA, USA', 'll': '36.7282054,-76.5835621'}
        ,{'city': 'Sugar Land, TX, USA', 'll': '29.6196787,-95.6349463'}
        ,{'city': 'Summerville, SC, USA', 'll': '33.0185039,-80.17564809999999'}
        ,{'city': 'Sunnyvale, CA, USA', 'll': '37.36883,-122.0363496'}
        ,{'city': 'Sunrise, FL, USA', 'll': '26.1571743,-80.28622560000001'}
        ,{'city': 'Sunrise Manor, NV, USA', 'll': '36.2110819,-115.0730563'}
        ,{'city': 'Surprise, AZ, USA', 'll': '33.639099,-112.3957576'}
        ,{'city': 'Syracuse, NY, USA', 'll': '43.0481221,-76.14742439999999'}
        ,{'city': 'Syracuse, NY, USA', 'll': '43.114397,-76.2710833'}
        ,{'city': 'Tacoma, WA, USA', 'll': '47.2528768,-122.4442906'}
        ,{'city': 'Tallahassee, FL, USA', 'll': '30.4382559,-84.28073289999999'}
        ,{'city': 'Tamarac, FL, USA', 'll': '26.2128609,-80.2497707'}
        ,{'city': 'Tamiami, FL, USA', 'll': '25.7587114,-80.398387'}
        ,{'city': 'Tampa, FL, USA', 'll': '27.950575,-82.4571776'}
        ,{'city': 'Taunton, MA, USA', 'll': '41.900101,-71.0897674'}
        ,{'city': 'Taylor, MI, USA', 'll': '42.240872,-83.2696509'}
        ,{'city': 'Taylorsville, UT, USA', 'll': '40.66772479999999,-111.9388258'}
        ,{'city': 'Temecula, CA, USA', 'll': '33.4936391,-117.1483648'}
        ,{'city': 'Tempe, AZ, USA', 'll': '33.4255104,-111.9400054'}
        ,{'city': 'Temple, TX, USA', 'll': '31.0982344,-97.342782'}
        ,{'city': 'Terre Haute, IN, USA', 'll': '39.4667034,-87.41390919999999'}
        ,{'city': 'Texas City, TX, USA', 'll': '29.383845,-94.9027002'}
        ,{'city': 'The Hammocks, FL, USA', 'll': '25.6714925,-80.4444997'}
        ,{'city': 'The Villages, FL, USA', 'll': '28.9377778,-81.9711111'}
        ,{'city': 'The Woodlands, TX, USA', 'll': '30.1658207,-95.46126249999999'}
        ,{'city': 'Thornton, CO, USA', 'll': '39.8680412,-104.9719243'}
        ,{'city': 'Thousand Oaks, CA, USA', 'll': '34.1705609,-118.8375937'}
        ,{'city': 'Tigard, OR, USA', 'll': '45.4312294,-122.7714861'}
        ,{'city': 'Tinley Park, IL, USA', 'll': '41.5733669,-87.7844944'}
        ,{'city': 'Titusville, FL, USA', 'll': '28.6122187,-80.8075537'}
        ,{'city': 'Toledo, OH, USA', 'll': '41.6639383,-83.55521200000001'}
        ,{'city': 'Toms River, NJ, USA', 'll': '39.9537358,-74.1979458'}
        ,{'city': 'New York, NY, USA', 'll': '40.7143528,-74.00597309999999'}
        ,{'city': 'Topeka, KS, USA', 'll': '39.0558235,-95.68901849999999'}
        ,{'city': 'Torrance, CA, USA', 'll': '33.8358492,-118.3406288'}
        ,{'city': "Town 'n' Country, FL, USA", 'll': '28.0105745,-82.57731930000001'}
        ,{'city': 'Towson, MD, USA', 'll': '39.4014955,-76.6019125'}
        ,{'city': 'Tracy, CA, USA', 'll': '37.7396513,-121.4252227'}
        ,{'city': 'Trenton, NJ, USA', 'll': '40.2170534,-74.7429384'}
        ,{'city': 'Troy, MI, USA', 'll': '42.6055893,-83.1499304'}
        ,{'city': 'Troy, NY, USA', 'll': '42.7284117,-73.69178509999999'}
        ,{'city': 'Tuckahoe, VA, USA', 'll': '37.5901463,-77.5563761'}
        ,{'city': 'Tucson, AZ, USA', 'll': '32.2217429,-110.926479'}
        ,{'city': 'Tulare, CA 93274, USA', 'll': '36.2077288,-119.3473379'}
        ,{'city': 'Tulsa, OK, USA', 'll': '36.1539816,-95.99277500000001'}
        ,{'city': 'Tulsa, USA', 'll': '36.2740199,-96.2375947'}
        ,{'city': 'Turlock, CA, USA', 'll': '37.4946568,-120.8465941'}
        ,{'city': 'Tuscaloosa, AL, USA', 'll': '33.2098407,-87.56917349999999'}
        ,{'city': 'Tustin, CA, USA', 'll': '33.7458511,-117.826166'}
        ,{'city': 'Twin Falls, ID, USA', 'll': '42.5629668,-114.4608711'}
        ,{'city': 'Tyler, TX, USA', 'll': '32.3512601,-95.30106239999999'}
        ,{'city': 'Union City, CA, USA', 'll': '37.5919304,-122.0456199'}
        ,{'city': 'Union City, NJ, USA', 'll': '40.7795455,-74.02375119999999'}
        ,{'city': 'Union, NJ, USA', 'll': '40.6357419,-74.9580495'}
        ,{'city': 'Upland, CA, USA', 'll': '34.09751,-117.6483876'}
        ,{'city': 'Urbana, IL, USA', 'll': '40.1105875,-88.2072697'}
        ,{'city': 'Urbandale, IA, USA', 'll': '41.6266555,-93.71216559999999'}
        ,{'city': 'Utica, NY, USA', 'll': '43.100903,-75.232664'}
        ,{'city': 'Vacaville, CA, USA', 'll': '38.3565773,-121.9877444'}
        ,{'city': 'Valdosta, GA, USA', 'll': '30.8327022,-83.2784851'}
        ,{'city': 'Vallejo, CA, USA', 'll': '38.1040864,-122.2566367'}
        ,{'city': 'Valrico, FL, USA', 'll': '27.9408333,-82.24249999999999'}
        ,{'city': 'Vancouver, WA, USA', 'll': '45.6387281,-122.6614861'}
        ,{'city': 'Victoria, TX, USA', 'll': '28.8052674,-97.0035982'}
        ,{'city': 'Victorville, CA, USA', 'll': '34.5361067,-117.2911565'}
        ,{'city': 'Vineland, NJ, USA', 'll': '39.4862267,-75.02573129999999'}
        ,{'city': 'Virginia Beach, VA, USA', 'll': '36.8529263,-75.97798499999999'}
        ,{'city': 'Visalia, CA, USA', 'll': '36.3302284,-119.2920585'}
        ,{'city': 'Vista, CA, USA', 'll': '33.2000368,-117.2425355'}
        ,{'city': 'Waco, TX, USA', 'll': '31.549333,-97.1466695'}
        ,{'city': 'Waldorf, MD, USA', 'll': '38.6343544,-76.90668289999999'}
        ,{'city': 'Walnut Creek, CA, USA', 'll': '37.9063131,-122.064963'}
        ,{'city': 'Waltham, MA, USA', 'll': '42.3764852,-71.2356113'}
        ,{'city': 'Warner Robins, GA, USA', 'll': '32.6086111,-83.6380556'}
        ,{'city': 'Warren, MI, USA', 'll': '42.49299999999999,-83.02819699999999'}
        ,{'city': 'Warwick, RI, USA', 'll': '41.7001009,-71.4161671'}
        ,{'city': 'Washington, DC, USA', 'll': '38.8951118,-77.0363658'}
        ,{'city': 'Waterbury, CT, USA', 'll': '41.5581525,-73.0514965'}
        ,{'city': 'Waterloo, IA, USA', 'll': '42.4927641,-92.34296309999999'}
        ,{'city': 'Watsonville, CA, USA', 'll': '36.910231,-121.7568946'}
        ,{'city': 'Waukegan, IL, USA', 'll': '42.3636331,-87.84479379999999'}
        ,{'city': 'Waukesha, WI, USA', 'll': '43.0116784,-88.2314813'}
        ,{'city': 'Wauwatosa, WI, USA', 'll': '43.0494572,-88.0075875'}
        ,{'city': 'Wellington, FL, USA', 'll': '26.6552309,-80.25425129999999'}
        ,{'city': 'Wesley Chapel, FL, USA', 'll': '28.1786111,-82.35055559999999'}
        ,{'city': 'West Allis, WI, USA', 'll': '43.0166806,-88.0070315'}
        ,{'city': 'West Babylon, NY, USA', 'll': '40.718155,-73.354287'}
        ,{'city': 'West Covina, CA, USA', 'll': '34.0686208,-117.9389526'}
        ,{'city': 'West Des Moines, IA, USA', 'll': '41.5772115,-93.711332'}
        ,{'city': 'Westfield, MA, USA', 'll': '42.1250929,-72.749538'}
        ,{'city': 'West Hartford, CT, USA', 'll': '41.7620842,-72.7420151'}
        ,{'city': 'West Haven, CT, USA', 'll': '41.2706527,-72.94704709999999'}
        ,{'city': 'West Jordan, UT, USA', 'll': '40.6096698,-111.9391031'}
        ,{'city': 'Westland, MI, USA', 'll': '42.32420399999999,-83.400211'}
        ,{'city': 'Westminster, CO, USA', 'll': '39.8366528,-105.0372046'}
        ,{'city': 'Westminster, CA, USA', 'll': '33.7513419,-117.9939921'}
        ,{'city': 'West New York, NJ, USA', 'll': '40.7878788,-74.0143064'}
        ,{'city': 'Weston, FL, USA', 'll': '26.1003654,-80.3997748'}
        ,{'city': 'West Palm Beach, FL, USA', 'll': '26.7153424,-80.0533746'}
        ,{'city': 'West Sacramento, CA, USA', 'll': '38.5804609,-121.530234'}
        ,{'city': 'West Seneca, NY, USA', 'll': '42.8500585,-78.79975470000001'}
        ,{'city': 'West Valley City, UT, USA', 'll': '40.6916132,-112.0010501'}
        ,{'city': 'Weymouth, MA, USA', 'll': '42.2180724,-70.94103559999999'}
        ,{'city': 'Wheaton, IL, USA', 'll': '41.8661403,-88.1070127'}
        ,{'city': 'Wheaton, MD, USA', 'll': '39.0398314,-77.05525550000002'}
        ,{'city': 'White Plains, NY, USA', 'll': '41.03398620000001,-73.7629097'}
        ,{'city': 'Whitney, NV, USA', 'll': '36.0966897,-115.0407412'}
        ,{'city': 'Whittier, CA, USA', 'll': '33.9791793,-118.032844'}
        ,{'city': 'Wichita, KS, USA', 'll': '37.6922222,-97.3372222'}
        ,{'city': 'Wichita Falls, TX, USA', 'll': '33.9137085,-98.4933873'}
        ,{'city': 'Wilkes-Barre, PA, USA', 'll': '41.2459149,-75.88130749999999'}
        ,{'city': 'Wilmington, NC, USA', 'll': '34.2257255,-77.9447102'}
        ,{'city': 'Wilmington, DE, USA', 'll': '39.7458333,-75.5466667'}
        ,{'city': 'Wilson, NC, USA', 'll': '35.7212689,-77.9155395'}
        ,{'city': 'Winston-Salem, NC, USA', 'll': '36.09985959999999,-80.244216'}
        ,{'city': 'Woodbury, MN, USA', 'll': '44.9238552,-92.9593797'}
        ,{'city': 'Woodland, CA, USA', 'll': '38.67851570000001,-121.7732971'}
        ,{'city': 'Woonsocket, RI, USA', 'll': '42.00287609999999,-71.51478390000001'}
        ,{'city': 'Worcester, MA, USA', 'll': '42.2625932,-71.8022934'}
        ,{'city': 'Wylie, TX, USA', 'll': '33.0151201,-96.5388789'}
        ,{'city': 'Wyoming, MI, USA', 'll': '42.9133602,-85.7053085'}
        ,{'city': 'Yakima, WA, USA', 'll': '46.6020711,-120.5058987'}
        ,{'city': 'Yonkers, NY, USA', 'll': '40.9312099,-73.89874689999999'}
        ,{'city': 'Yorba Linda, CA, USA', 'll': '33.8886259,-117.8131125'}
        ,{'city': 'York, PA, USA', 'll': '39.9625984,-76.727745'}
        ,{'city': 'Youngstown, OH, USA', 'll': '41.0997803,-80.6495194'}
        ,{'city': 'Yuba City, CA, USA', 'll': '39.1404477,-121.6169108'}
        ,{'city': 'Yucaipa, CA, USA', 'll': '34.033625,-117.0430865'}
        ,{'city': 'Yuma, AZ, USA', 'll': '32.6926512,-114.6276916'}
    ];