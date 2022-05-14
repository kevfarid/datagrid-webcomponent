export function filterData(key, data, value, type) {
  if (type === "string") {
    return data.filter((row) =>
      row[key].toLowerCase().includes(value.toLowerCase())
    );
  }

  if (type === "number") {
    return data.filter((row) => row[key] === value);
  }

  return data.sort((a, b) => {
    const aValue = a[key].toString().toLowerCase();
    const bValue = b[key].toString().toLowerCase();

    return aValue.localeCompare(bValue);
  });
}

export function filtersExecuted(rows, filters) {
  return rows.filter((row) => {
    for (const key in filters) {
      const filter = filters[key].toString().toLowerCase();
      const value = row[key].toString().toLowerCase();

      if (value === undefined || value.includes(filter)) {
        return false;
      }
    }
    return true;
  });
}
