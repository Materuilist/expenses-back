export default function (item) {
  return (
    item !== null && item !== undefined && item !== NaN && item.length !== 0
  );
};
