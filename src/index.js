import "./styles.css";

const getData = async () => {
  const url =
    "https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dy.px";

  const res = await fetch(url, {
    // method: 'POST',
    // headers: {'content-type': 'application/json'},
    // body: JSON.stringify()
  });

  const data = await res.json();

  console.log(data);

  return data;
};

getData();
