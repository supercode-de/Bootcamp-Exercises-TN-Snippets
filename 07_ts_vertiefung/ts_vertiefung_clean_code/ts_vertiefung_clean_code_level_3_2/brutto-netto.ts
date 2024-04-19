const a = 'brutto';
const b = 'steuerklasse';

function main(subEv: Event): void {
  subEv.preventDefault();
  function result(d: number, e: number) {
    // tslint:disable-next-line
    // tslint:disable-next-line
    let f =
      e === 1
        ? d * 0.7
        : e === 2
        ? d * 0.75
        : e === 3
        ? d * 0.8
        : e === 4
        ? d * 0.85
        : e === 5
        ? d * 0.9
        : e === 6
        ? d * 0.95
        : null;

    return f?.toFixed(2);
  }

  const g = parseFloat(document.getElementById(a) ? (document.getElementById(a) as any).value : 3000);
  const h = parseFloat(document.getElementById(b) ? (document.getElementById(b) as any).value : 1);

  function setHtml(elementId: string): number {
    const element = document.getElementById(elementId) as HTMLInputElement;
    return parseFloat(element.value || '0');
  }

  let zw = 0;
  if (h === 1) {
    const zw1 = g * 0.7;
    zw = zw1;
  } else if (h === 2) {
    const zw2 = g * 0.75;
    zw = zw2;
  } else if (h === 3) {
    const zw2 = g * 0.8;
    zw = zw2;
  } else if (h === 4) {
    const zw2 = g * 0.9;
    zw = zw2;
  } else if (h === 5) {
    const zw2 = g * 0.95;
    zw = zw2;
  } else if (h === 6) {
    const zw2 = g * 0.75;
    zw = zw2;
  }

  const end = zw?.toFixed(2);

  const res = result(g, h);

  if (end === res) {
    console.log('refactoring worked - it´s the same');
    //todo cleanup other code later
    (document.getElementById('result') as any).innerText = `Nettogehalt: ${res} €`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form?.addEventListener('submit', main);
});
