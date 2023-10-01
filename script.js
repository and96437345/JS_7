// Задание 1
// Реализовать класс, описывающий окружность. В классе долж-
// ны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

// class Circle {
//     constructor(radius) {
//     this.radius = radius;
//     }
//     get getRadius() {
//         return this.radius;
//     }
//     set setRadius(value) {
//         this.radius = value;
//     }
//     get getDiameter() {
//         return this.radius*2;
//     }
//     square() {
//         return (this.radius**2*Math.PI)
//     }
//     length() {
//         return (this.radius*Math.PI)
//     }
// }

// let circle1 = new Circle;
// circle1.setRadius = 3;
// console.log(`Радиус окружности ${circle1.radius}`)
// console.log(`Радиус окружности ${circle1.getRadius}`);
// console.log(`Диаметр окружности ${circle1.getDiameter}`);
// console.log(`Площадь окружности ${circle1.square()}`);
// console.log(`Длина окружности ${circle1.length()}`);



// Задание 2
// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец теку-
// щего элемента;
// ■ метод для добавления вложенного элемента в начало те-
// кущего элемента;
// ■ метод getHtml(), который возвращает html код в виде
// строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок
// и добавить его на страницу с помощью document.write().
// Обратите внимание. Чтобы получить весь этот html в виде
// строки должно быть достаточно вызвать метод getHtml только
// у тега с идентификатором wrapper.

// class HtmlElement {
//     constructor(tagTitle, selfClosing, text, arrayAttributes = [], arrayStyles = [], arrayTags = []) {
//         if (selfClosing == true) {
//             this.tagTitle = `<${tagTitle}`;
//             this.tagTitleEnd = '>'
//         } else {
//             this.tagTitle = `<${tagTitle} `;
//             this.tagTitleEnd = ''
//         }
//         if (selfClosing == true) {
//             this.selfClosing = `</${tagTitle}>`;
//             this.selfClosingEnd = '';
//         } else {
//             this.selfClosing = '';
//             this.selfClosingEnd = '>';
//         }
//         if (selfClosing == true) {
//             this.text = text;
//         } else {
//             this.text = '';
//         }
//         this.arrayAttributes = arrayAttributes;
//         this.arrayStyles = arrayStyles;
//         if (this.arrayStyles.length > 0) {
//             this.styleStart = 'style="';
//             this.styleEnd = '" '
//         } else {
//             this.styleStart = '';
//             this.styleEnd = ''
//         }
//         if ((this.arrayStyles.length > 0 || this.arrayAttributes.length > 0) && selfClosing == true) {
//             this.tagTitleClose = ' '
//         } else {
//             this.tagTitleClose = ''
//         }
//         this.arrayTags = arrayTags;
//     }
    
//     set setAttribute(attribute) {
//         this.arrayAttributes.push(attribute)
//     }
//     set setStyle(style) {
//         this.arrayStyles.push(style)
//     }

//     addTegEnd() {
//         this.arrayTags.push(element)
//     }
//     addTegStart() {
//         this.arrayTags.unshift(element)
//     }
//     getHtml() {
//         return (`${this.tagTitle}${this.tagTitleClose}${this.styleStart}${this.arrayStyles.join('; ')}${this.styleEnd}${this.arrayAttributes.join(' ')}${this.tagTitleEnd}${this.text}${this.arrayTags.join('')}${this.selfClosing}${this.selfClosingEnd}`)
//     }
// }

// let elementH3 = new HtmlElement('h3', true, 'What is Lorem Ipsum?');
// let elementImg = new HtmlElement('img', false,'', ['src="lipsum.jpg"', 'alt="Lorem Ipsum"'], ['width: 100%']);
// let elementA = new HtmlElement('a', true, 'More...', ['href="https://www.lipsum.com/"', 'target="_blank"']);
// let elementP = new HtmlElement('p', true, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever sinse the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.', [], ['text-align: justify'], [`${elementA.getHtml()}`]);
// let elementDiv = new HtmlElement('div', true, '', [], ['width: 300px', 'margin: 10px'], [`${elementH3.getHtml()}`, `${elementImg.getHtml()}`, `${elementP.getHtml()}`]);
// let elementDivWrapper = new HtmlElement('div', true, '', ['id="wrapper"'], ['display: flex'], [`${elementDiv.getHtml()}`, `${elementDiv.getHtml()}`]);

// document.write(elementDivWrapper.getHtml());



// Задание 3
// Реализовать класс, который описывает css класс.
// Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде стро-
// ки.

// class CssClass {
//     constructor(title, arrayStyles = []) {
//         this.title = title;
//         this.arrayStyles = arrayStyles; 
//     }
//     setCss(styles) {
//         this.arrayStyles = styles
//     }
//     delCss() {
//         this.arrayStyles = [];
//     }
//     getCss() {
//         return (this.arrayStyles);
//     }
// }



// Задание 4
// Реализовать класс, описывающий блок html документ.
// Класс HtmlBlock должен содержать внутри себя:
// ■ коллекцию стилей, описанных с помощью класса CssClass;
// ■ корневой элемент, описанный с помощью класса
// HtmlElement;
// ■ метод getCode(), который возвращает строку с html ко-
// дом (сначала теги style с описанием всех классов, а потом
// все html содержимое из корневого тега и его вложенных
// элементов).
// С помощью написанных классов реализовать следующий блок
// (см. рис. 2) и добавить его на страницу с помощью document.write().

// class CssClass {
//     constructor(title, arrayStyles = []) {
//         this.title = title;
//         this.arrayStyles = arrayStyles; 
//     }
//     setCss(styles) {
//         this.arrayStyles = styles
//     }
//     delCss() {
//         this.arrayStyles = [];
//     }
//     getCss() {
//         return (this.arrayStyles.join(''));
//     }
// }

// let style1 = new CssClass;
// let arrayOfStyles = (['.wrap {display: flex;}', '.block {width: 300px; margin: 10px;}', '.img {width: 100%;}', '.text {text-align: justify;}']);
// style1.setCss(arrayOfStyles);

// class HtmlElement {
//     constructor(tagTitle, selfClosing, text, arrayAttributes = [], arrayStyles = [], arrayTags = []) {
//         if (selfClosing == true) {
//             this.tagTitle = `<${tagTitle}`;
//             this.tagTitleEnd = '>'
//         } else {
//             this.tagTitle = `<${tagTitle} `;
//             this.tagTitleEnd = ''
//         }
//         if (selfClosing == true) {
//             this.selfClosing = `</${tagTitle}>`;
//             this.selfClosingEnd = '';
//         } else {
//             this.selfClosing = '';
//             this.selfClosingEnd = '>';
//         }
//         if (selfClosing == true) {
//             this.text = text;
//         } else {
//             this.text = '';
//         }
//         this.arrayAttributes = arrayAttributes;
//         this.arrayStyles = arrayStyles;
//         if (this.arrayStyles.length > 0) {
//             this.styleStart = 'style="';
//             this.styleEnd = '" '
//         } else {
//             this.styleStart = '';
//             this.styleEnd = ''
//         }
//         if ((this.arrayStyles.length > 0 || this.arrayAttributes.length > 0) && selfClosing == true) {
//             this.tagTitleClose = ' '
//         } else {
//             this.tagTitleClose = ''
//         }
//         this.arrayTags = arrayTags;
//     }
    
//     set setAttribute(attribute) {
//         this.arrayAttributes.push(attribute)
//     }
//     set setStyle(style) {
//         this.arrayStyles.push(style)
//     }

//     addTegEnd() {
//         this.arrayTags.push(element)
//     }
//     addTegStart() {
//         this.arrayTags.unshift(element)
//     }
//     getHtml() {
//         return (`${this.tagTitle}${this.tagTitleClose}${this.styleStart}${this.arrayStyles.join('; ')}${this.styleEnd}${this.arrayAttributes.join(' ')}${this.tagTitleEnd}${this.text}${this.arrayTags.join('')}${this.selfClosing}${this.selfClosingEnd}`)
//     }
// }

// let elementH3 = new HtmlElement('h3', true, 'What is Lorem Ipsum?');
// let elementImg = new HtmlElement('img', false,'', ['class="img"', 'src="lipsum.jpg"', 'alt="Lorem Ipsum"']);
// let elementA = new HtmlElement('a', true, 'More...', ['href="https://www.lipsum.com/"', 'target="_blank"']);
// let elementP = new HtmlElement('p', true, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever sinse the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.', ['class="text"'], [], [`${elementA.getHtml()}`]);
// let elementDiv = new HtmlElement('div', true, '', ['class="block"'], [], [`${elementH3.getHtml()}`, `${elementImg.getHtml()}`, `${elementP.getHtml()}`]);
// let elementDivWrapper = new HtmlElement('div', true, '', ['id="wrapper"', 'class="wrap"'], [], [`${elementDiv.getHtml()}`, `${elementDiv.getHtml()}`]);
// let elementStyle = new HtmlElement('style', true, '', [], [], [`${style1.getCss()}`])

// class HtmlBlock {
//     constructor(styles = [], html) {
//         this.styles = styles;
//         this.html = html;
//     }
//     getCode() {
//         return (`${this.styles}${this.html}`)
//     }
// }

// let htmlBlock1 = new HtmlBlock(`${elementStyle.getHtml()}`, `${elementDivWrapper.getHtml()}`);
// document.write(htmlBlock1.getCode());