//axios import buraya gelecek
import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
function geoOlustur(bilgiler) {
  const kutu = document.createElement("div");
  kutu.classList.add("card");

  const imgOlustur = document.createElement("img");
  imgOlustur.setAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2000px-Flag_of_Turkey.svg.png"
  );

  const cardBilgi = document.createElement("div");
  cardBilgi.classList.add("card-info");

  const ipAdresi = document.createElement("h3");
  ipAdresi.classList.add("ip");
  ipAdresi.textContent = bilgiler.sorgu;

  const paragrafUlke = document.createElement("p");
  paragrafUlke.classList.add("ulke");
  paragrafUlke.textContent = `${bilgiler.ülke} (${bilgiler.ülkeKodu})`;

  const paragrafEnlem = document.createElement("p");
  paragrafEnlem.textContent = `Enlem:${bilgiler.enlem} Boylam: ${bilgiler.boylam}`;

  const paragrafSehir = document.createElement("p");
  paragrafSehir.textContent = bilgiler.şehir;

  const paragrafSaat = document.createElement("p");
  paragrafSaat.textContent = bilgiler.saatdilimi;

  const paragrafPara = document.createElement("p");
  paragrafPara.textContent = bilgiler.parabirimi;

  const paragrafIsp = document.createElement("p");
  paragrafIsp.textContent = bilgiler.isp;

  kutu.appendChild(imgOlustur);
  kutu.appendChild(cardBilgi);
  cardBilgi.appendChild(ipAdresi);
  cardBilgi.appendChild(paragrafUlke);
  cardBilgi.appendChild(paragrafEnlem);
  cardBilgi.appendChild(paragrafSehir);
  cardBilgi.appendChild(paragrafSaat);
  cardBilgi.appendChild(paragrafPara);
  cardBilgi.appendChild(paragrafIsp);
  return kutu;
}
const cardsBolumu = document.querySelector(".cards");
axios
  .get("https://apis.ergineer.com/ipgeoapi/78.171.155.168")
  .then((response) => {
    cardsBolumu.appendChild(geoOlustur(response.data));
    console.log(response);
  })
  .catch((error) => {
    console.log("Error:" + error);
  });
