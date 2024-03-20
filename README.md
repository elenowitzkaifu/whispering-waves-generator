# whispering-waves-generator

The "whispering-waves-generator" library provides an easy-to-use interface to add a soothing, animated wave effect to any element on your web page using pure CSS animations enhanced with PostCSS and Autoprefixer for wider browser support.

## Features

- Easy integration into any web project.
- Generates dynamic CSS animations for a wave effect.
- Uses PostCSS and Autoprefixer for better browser compatibility.
- Fully customizable through CSS.

## Installation

You can install the "whispering-waves-generator" library via npm:

```bash
npm install whispering-waves-generator
```

## Quick Start

To add a wave effect to an element, you need to have an element with a unique ID on your webpage. Then, you can call `addWaveToElement` with the ID of the element to which you want to add the wave effect.

### Example:

HTML:

```html
<div id="myElement" style="position:relative; height:200px;"></div>
```

JavaScript:

```javascript
import { addWaveToElement } from 'whispering-waves-generator';

addWaveToElement('myElement');
```

## API Reference

### `addWaveToElement(elementId)`

Adds the wave effect to the specified element by its ID.

- `elementId` - The ID of the element to which the wave effect will be added.

## Customizing the Wave Effect

The wave effect can be customized by overriding the CSS properties of the `.wave` class in your stylesheet. For example, you can change the background gradient, animation duration, or the keyframes of the animation to achieve different effects.

## Contributing

We welcome contributions to the "whispering-waves-generator"! If you have suggestions or encounter any issues, please feel free to open an issue or submit a pull request on our GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
