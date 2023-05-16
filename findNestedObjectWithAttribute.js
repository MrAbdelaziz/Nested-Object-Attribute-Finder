/*
                                      E-mail:
   [[[[[[[[[[[[[[[      ]]]]]]]]]]]]]]] █▀▀▀▀▀█ ▄█ ▄▄█▀▄█ █▀▀▀▀▀█
   [:::::[                      ]:::::] █ ███ █ ▄█▀█▄ ▄▀  █ ███ █
   [:::::[                      ]:::::] █ ▀▀▀ █ ▄ █ ▀  ▄▀ █ ▀▀▀ █
   [:::::[                      ]:::::] ▀▀▀▀▀▀▀ ▀ ▀ ▀ ▀ ▀ ▀▀▀▀▀▀▀
   [:::::[                      ]:::::] ▀█▀██▄▀▀▀█▀█▀▀▀ █▀ █ ▀▄▀ 
   [:::::[ CODED BY MrAbdelaziz ]:::::] ▄  ▀  ▀ ▄█▄▄ ▀██▀▄█▄█ ▀▀█
   [:::::[ Github:MrAbdelaziz   ]:::::] ▄█▄█ ▀▀ ▀▀▄█▀█▀▀▄▀▀ ▀ ▀▀ 
   [:::::[                      ]:::::] █ █▄ ▀▀▄▀▄ ▄▄ ██▄ ▀ ▀  ██
   [:::::[                      ]:::::] ▀ ▀▀▀▀▀▀█▀▄▄▀▀▀▄█▀▀▀██▀▀▀
   [:::::[                      ]:::::] █▀▀▀▀▀█ ▀▀█▄▀ ▄ █ ▀ █  ▀█
   [:::::[                      ]:::::] █ ███ █ █▀▀███▀▀▀██▀████▄
   [:::::[                      ]:::::] █ ▀▀▀ █ ██▄ ▀ ▄▄▄▄▄█ ▀  █
   [[[[[[[[[[[[[[[      ]]]]]]]]]]]]]]] ▀▀▀▀▀▀▀ ▀▀ ▀▀▀▀   ▀  ▀▀▀▀
   
const attributeName = 'EXEMPLE';
const result = findNestedObjectWithAttribute(document, attributeName);

if (result) {
  console.log(`Nested object with attribute "${attributeName}" found at path: ${result.path}`);
  console.log(`Value of "${attributeName}": ${result.value}`);
} else {
  console.log(`Nested object with attribute "${attributeName}" not found.`);
}

*/

function findNestedObjectWithAttribute(obj, attributeName) {
  const queue = [{ object: obj, path: 'document' }];

  while (queue.length > 0) {
    const { object, path } = queue.shift();

    for (let key in object) {
      const value = object[key];
      const currentPath = `${path}.${key}`;

      if (typeof value === 'object' && value !== null && !isStyleSheet(value)) {
        if (attributeName in value) {
          return { path: currentPath, value: value[attributeName] };
        }
        queue.push({ object: value, path: currentPath });
      }
    }
  }

  return null; // Nested object with attribute not found
}

function isStyleSheet(obj) {
  return obj instanceof CSSStyleSheet;
}



