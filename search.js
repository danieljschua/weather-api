let elements = document.querySelector('.search');
elements = Array.from(elements.children);

const input = elements[0];
const btn = elements[1];

const searchCity = async () => {
  const search = input.value;
  console.log(search);
  await loadWeather('' + search);
  input.value = '';
};

btn.addEventListener('click', async () => {
  await searchCity();
});

input.addEventListener('keydown', async (event) => {
  if (input.value.length < 1) return;
  if (event.key === 'Enter') await searchCity();
});
