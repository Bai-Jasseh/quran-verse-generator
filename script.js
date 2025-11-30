function generateRandomVerse() {
      const info = document.getElementById('info');
      const arabicElem = document.getElementById('arabic');
      const englishElem = document.getElementById('english');
      const surahElem = document.getElementById('surah');
      const audioElem = document.getElementById('audio');

      info.textContent = "Loading...";
      arabicElem.textContent = "";
      englishElem.textContent = "";
      surahElem.textContent = "";
      audioElem.src = "";
      audioElem.load();

      const randomAyahNumber = Math.floor(Math.random() * 6236) + 1;

      fetch('https://api.alquran.cloud/v1/ayah/' + randomAyahNumber + '/ar.alafasy')
        .then(response => response.json())
        .then(arabicData => {
          if (arabicData.code !== 200) {
            info.textContent = "Error loading Arabic text.";
            return;
          }

          arabicElem.textContent = arabicData.data.text;
          audioElem.src = arabicData.data.audio;
          audioElem.load();

          const surahName = arabicData.data.surah.englishName;
          const ayahInSurah = arabicData.data.numberInSurah;
          surahElem.textContent = "Surah: " + surahName + " | Ayah " + ayahInSurah;

          return fetch('https://api.alquran.cloud/v1/ayah/' + randomAyahNumber + '/en.asad');
        })
        .then(englishResponse => englishResponse.json())
        .then(englishData => {
          if (englishData.code !== 200) {
            englishElem.textContent = "Error loading English translation.";
            return;
          }

          englishElem.textContent = englishData.data.text;
          info.textContent = "Here is a random verse from the Quran.";
        })
        .catch(error => {
          info.textContent = "Failed to fetch verse: " + error;
        });
    }