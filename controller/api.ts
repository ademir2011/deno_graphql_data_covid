const dadosCorona = async (estado: String, cidade: String, data: String) => {
  if (estado != undefined && cidade == undefined && data == undefined) {
    return await fetch(
      "https://brasil.io/api/dataset/covid19/caso/data?state=" + estado,
      { method: "GET" },
    ).then((res) => res.json().then((data) => data.results))
      .catch((err) => err);
  } else if (cidade != undefined && data == undefined) {
    return await fetch(
      "https://brasil.io/api/dataset/covid19/caso/data?city=" + cidade,
      { method: "GET" },
    ).then((res) => res.json().then((data) => data.results))
      .catch((err) => err);
  } else if (
    (cidade != undefined || estado != undefined) && data != undefined
  ) {
    let enddata: any = [];

    let hasNext = true;
    let url = "https://brasil.io/api/dataset/covid19/caso/data?date=" + data;

    while (hasNext) {
      await fetch(
        url,
        { method: "GET" },
      ).then((res) =>
        res.json().then((data) => {
          enddata.push(...data.results);
          hasNext = data.next != null;
          url = hasNext ? data.next : null;
        })
      )
        .catch((err) => err);
    }

    return cidade != undefined
      ? enddata.filter((dado: any) => dado.city === cidade)
      : enddata.filter((dado: any) => dado.state === estado);
  } else {
  }
};

export { dadosCorona };
