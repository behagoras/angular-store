# Angular

# Comandos bash

## `ng serve` ->

para levantar el servidor (puedes enviarle mas datos como puerto o dominio donde quieres que corra, normalmente usa el puerto 4200)

Para cambiar la ruta en la cual correrá el proyecto:

```bash
ng serve --o --host 192.168.1.26 --port {PORT} // cambiar la ruta en la cual correrá el proyecto
```

## `ng build --prod` ->

similar a serve, se usa para alistar la aplicación para producción, te genera una capeta en tu proyecto llamada “dist” donde crea lo necesario para montar en producción.

## `ng --version` ->

Versiones que tienes en tu proyecto

## `ng g`->

Genera automáticamente el componente en una carpeta con el mismo nombre que se le dio. Ademas lo importa automáticamente en al *app.module.ts*

```shell
ng g c components/cart
```

- g = generate
- c = component

### Flags

#### --inline-style

Evita que se cree el archivo de estilos 

```shell
ng g c componente --inline-style  
```

#### --inline-template

Este evita que se cree el html

```shell
ng g c componente --inline-template  
```

## `ng lint`->

```
ng lint
```

Revisa el código del proyecto para ver si se están cumpliendo las reglas definidas en el archivo tslint.json

```
ng lint --format json
```

Nos permite visualizar el resultado de la revisión con un formato json.

```
ng lint --fix
```

Corrige automáticamente, dentro de lo posible, los errores encontrados.

# [Directivas](https://angular.io/api/common#directives)

## `ngIf`

Muestra el componente sólo si cumple con la directiva

```html
<div *ngIf="title==='david'"> <!-- Sólo se mostrará si la condición es verdadera -->
  Súper div
</div>
```

## `ng-model`

Permite hacer data binding, osea conectar entre un dato y un componente

```html
<input type="text" [(ngModel)]="title"> <!-- Needs to import FormsModule in app.module.ts -->
```



En proyectos reales puedes que te encuentres con dos tipos de NgModel

1. [(ngModel)]=“nombre”
2. [ngModel]=“apellido”

El primero hace un enlace de doble sentido, es decir, si se actualiza la vista se actualiza el valor y si se actualiza el valor se actualiza la vista.

El segundo hace un enlace de un sólo sentido, este sentido va desde el modelo a la vista, pero la vista NO puede actualizar al modelo. Pueden copiar y pegar este código para comprobarlo.

# String interpolation

La interpolación es la forma de mostrar datos del **Componente** al **DOM** (esa representación que hace el browser del **HTML** con forma de objetos). Su notación es en forma de doble brackets `{{}}` () y lo que está dentro de esos brackets es lo que se quiere mostrar en pantalla «procesado».

Los templates de Angular utilizan html como lenguaje de maquetación donde se puede ejecutar interpolación de strings mediante una implementación de moustache donde dentro de los corchetes puedes hacer una sentencia que se resolverá como un string para ser renderizado en el DOM.

Nuestros templates tienen acceso a las variables exportadas en el arc`.ts` con el mismo nombre, mismas que podemos renderizar mediante los string interpolation, por ejemplo:

```html
<h1>{{ title }}</h1> <!-- Renderiza el título exportado en el archiv ts -->
<p>
  Las suma de 2 + 2 = {{ 2 + 2 }} <!-- 4 -->
</p>
```

Angular divide la lógica de la vista, pero puedes hacer uso de los elementos de uno o del otro en las 2 partes.

## `{{ template-expression }}`

Un template expresion es la expresión que se va a evaluar para renderizarse en el DOM.

Los tipos de **Template Expresion** válidos pueden ser:

- **{{ `1 + 1` }}**: la cual devuelve 2
- **{{ `miVariable` }}**: donde miVariable es una variable definida en el **Component**
- **{{ `miMetodo()` }}** : donde miMetodo() es un método definido en el **Component**

También se le puede asignar a un atributo **HTML** (que espere un string) el valor de una **Template Expresion**, por ejemplo

`<h1 innerText = {{pageTitle}}><h1>`  ← se asigna un valor “ya procesado” a un **Tag HTML**

# Directivas Propias

Para crear una directiva

```typescript
ng generate <directive>
ng g <directive>
```

Las directivas tienen un selector que es como su identificador el cual se debe colocar en las etiquetas como atributos.

Recuerda que las directivas modifican dinamicamente los elementos desde el DOM, esto no es buena practica aplicarlo para todo ya que existen alternativas más usables como el data-binding

## Ejemplo:

**selector = ‘[appTabRequired]’**

En el constructor tendremos que hacer la inyeccion de dependencia **ElementRef**

### constructor

```typescript
constructor( element: ElementRef){
   element.nativeElement.style.color = 'red';
}
```

### hightlight.directive.ts

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'blue';
  }
}

```

### Implementación en el template:

```html
<div appHighlight>
  Contenido
</div>
```



# COMPONENTES EN ANGULAR - Sintaxis General

Es muy bueno saber como construir un componente de manera manual, pero existe un comando para generar nuevos componentes de forma automática.

```bash
ng g c nombredelcomponente 
```

Nomenclatura : **name.component.ts**

## `Decoradores`:

Le dan un contexto a los artefactos de angular. Y le asigna el tipo de rol que cumplirá.

Un decorador angular es una clase especial de declaración que puede acoplarse a una clase, método, propiedad o parámetro. Los decoradores se declaran de la siguiente manera `@expression`. Gracias al parámetro `@` podemos reconocer fácilmente que estamos hablando de un decorador.

Generalmente usamos los decoradores para extender servicios de terceros, de esta manera evitamos modificar el código original del módulo y en tiempo de ejecución agregamos el funcionamiento que necesitamos.

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-name',
  templateUrl: './product.component.html'
})

export class ProductComponent {
  constructor() { }
}
```

## `selector:`

Se refiere al selector con el que vas a llamar a tu componente desde el html  (`<selector-name />`)

## `templateURL`

El templateURL: es el archivo html.

## `class`:

Para que la clase sea utilizada por cualquiera se debe hacer "publica"

`export class ProductComponent`

Además se debe importar el componente en el archivo `app.module.ts`,

```javascript
import { Component } from 'component-route'
...

@NgModule({
  declarations: [
    ...
    Component
  ],
  ...
})
export class AppModule { }

```

# Uso de Inputs y Outputs

Un componente sólo debe de tener una sóla responsabilidad (principio SOLID)

Lo que seria props en React

La [documentación](https://angular.io/guide/component-interaction#parent-listens-for-child-event) de Angular respecto a la comunicación entre componentes.

[Artículo](https://samueleresca.net/2016/08/solid-principles-using-typescript/) que explica la aplicabilidad de los principios SOLID en Angular.

## `Input`

Para comunicar de un componente padre a un componente hijo usamos **Input**

```typescript
export class ProductComponent {
  @Input() product: Product; // Equivalente a prop, dónde le vamos a pasar la data al componente
}
```

Para pasar argumentos, desde el template padre podemos utilizar los corchetes cuadrados con el Input para pasar el argumento

```html
<app-product [product]="products[0]"></app-product>
```

```html
<div *ngFor="let product of products">
  <app-product [product]="product"></app-product>
</div>
```

## `Output`

Para comunicar de un componente hijo a un componente padre usamos **Output**.

Los `Output` son eventos que podemos cachar desde nuestro componente hijo por parte del padre.

Para declararlos en nuestro componente tenemos que usar el decorador `@Output` sobre un `EventEmitter`

```typescript
export class ProductComponent {
  @Output() clickAddToCart = new EventEmitter<any>(); // (clickAddToCart)= eventHandler($event):function
  ...
}
```

Los `EventEmmiter`'s pueden emitir un evento con un argumento que será recibido por el padre. 

```typescript
export class ProductComponent {
  @Output() clickAddToCart = new EventEmitter<any>(); // (clickAddToCart)= eventHandler($event):function
  addToCart(){
    this.clickAddToCart.emit(this.product.id)
  }
}
```

Para hacer uso del output podemos llamar el evento desde paréntesis y asignarle un evento `(clickAddToCart)="handler($event)"`: 

```typescript
// Componente padre
export class AppComponent {
 ...
  handleProductAddToCart(id: number) {
    console.log('product -> id', id);
  }
}

// Template del componente padre
<app-product
  (clickAddToCart)="handleProductAddToCart($event)"
></app-product>

```

El event es recibido desde el `emit` del `EventEmmiter` :

`this.clickAddToCart.emit(this.product.id)`

## `Observables`

### Referencias:

- https://desarrolloweb.com/articulos/introduccion-teorica-observables-angular.html  
- https://platzi.com/clases/1071-angular2/6433-que-es-un-observable/

Observable es un patrón de diseño de software, donde básicamente tienes algo que observar (Observable) pueden ser eventos de un formulario, un llamada Htttp, etc, nosotros podemos suscribirnos a esos eventos. Otro componente importante es el que observa (Observer) este es el que se suscribe a los eventos y por medio de callbacks captura los eventos que emite el observable, por último tenemos el subject o sujeto que es el que hace que el observable lance los eventos para ser capturados.

Un Observer crea un espacio de ejecución independiente para cada suscriptor que este tenga.

# Ciclo de vida del componente

`ngOnChanges` y `ngDoCheck` tienen un error de colisión, ya que los dos pueden cumplir la tarea de escuchar por cambios del componente. El primero es la forma nativa de Angular, el segundo es una forma customizada para ello.

 `ngOnDestroy` nos ayudará remover las suscripciones a datos que inicializamos en algún momento, así podemos evitar bucles y fugas de memoria en la aplicación, es decir, limpiamos procesos de memoria siguiendo buenas prácticas.

![](https://static.platzi.com/media/user_upload/Ciclo-97b9ac82-5217-4dd1-ae4d-3f30c08cfa9b.jpg)

# [Pipes](https://angular.io/api/common/DatePipe) | tuberías o transformaciones

Los `pipes` en Angular son transformaciones que se le puede hacer a un dato dentro de una **template-expression** sirve para formatear data como se desee.

Los pipes pueden ser anidados, por lo que puede ser bastante poderoso.

La sintaxis es `{{ variableName | pipeName:argumentos }}`

Nosotros podemos crear nuestros pipes, pero Angular por defecto provee muchos pipes que podemos implementar sin muchas complicaciones, mismos que pueden ser configurables en el `app.module.ts` éstos son los comunes:

- [ AsyncPipe](https://angular.io/api/common/AsyncPipe)
- [ CurrencyPipe](https://angular.io/api/common/CurrencyPipe)
- [ DatePipe](https://angular.io/api/common/DatePipe)
- [ DecimalPipe](https://angular.io/api/common/DecimalPipe)
- [ I18nPluralPipe](https://angular.io/api/common/I18nPluralPipe)
- [ I18nSelectPipe](https://angular.io/api/common/I18nSelectPipe)
- [ JsonPipe](https://angular.io/api/common/JsonPipe)
- [ KeyValuePipe](https://angular.io/api/common/KeyValuePipe)
- [ LowerCasePipe](https://angular.io/api/common/LowerCasePipe)
- [ PercentPipe](https://angular.io/api/common/PercentPipe)
- [ SlicePipe](https://angular.io/api/common/SlicePipe)
- [ TitleCasePipe](https://angular.io/api/common/TitleCasePipe)
- [ UpperCasePipe](https://angular.io/api/common/UpperCasePipe)

[Pueden ver unos ejemplos acá](https://bit.ly/2oRRj0Z) 

Para agregar localismos a nuestros pipes (en este caso mexicanos) tendríamos que agregar el idioma a un `provider` dentro de `app.module.ts` de la siguiente forma:

```typescript
...
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
...
 
@NgModule({
 ...
 providers: [ { provide: LOCALE_ID, useValue: 'es-mx' } ],
 ...
})
export class AppModule { }
```

## Pipes custom

Los pipes en angular tienen muy buen rendimiento por lo que se recomiendan envés de las funciones para estos casos

Los **pipes** nos sirven para transformar datos.

Un dato puede ingresar y puede ser convertido segun el pipe usado

Recuerda que si quieres generar tus propios pipes puedes usar

```bash
$ ng generate pipe <name> 
$ ng g pipe <name>
```

### Ejemplo de pipe custom

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exp:number=2): number {
    return Math.pow(value, exp);
  }
}
```

# ngModule

Los módulos en angular sirven para resumir o adjuntar varios artefactos de Angular como servicios, componentes y directivas, dividiendo y abstrayendo el dominio de la aplicación.

De esta manera 

Los componentes que hacen parte de una página en particular se pueden encapsular en un mismo módulo.

Los módulos especiales son core y shared.

- **core**: Guarda toda la funcionalidad de la aplicación que va a ser compartida, es decir que genera una sóla referencia de la funcionalidad, siguiendo el principio Singleton de SOLID, facilitando así el traslado de funcionalidad entre aplicaciones. guarda todos los servicios y componentes que usaremos a lo largo de todos los otros módulos. Este sera usado en **todos ** los otros componentes y/o modulos respetando los principios SOLID (SINGLETON)
- **shared**: Encapsula los componentes y servicios compartidos para la aplicación. podemos almacenar componentes y servicios compartidos. En este podemos tener componentes servicios y/o compartidos.

## RUTAS EN ANGULAR

En el archivo **app-routing-module.ts** se encuentra un objeto **Route** el cual sirve para incrustar las rutas del proyecto.

La sintaxis dentro del router (`app-routing-module.ts`):

```json
import { componentName } from './url/to/componentName.component';

const routes: Routes = [
  {
    path = ‘routeName’,
    component = componentName
  },
]
  
```

Donde: 

- `path` = ruta relativa al home ('/') de nuestra app
- `component` = componente importado desde `componentName.component.ts`

La forma de implementar el **router** en un **`template.html`** es con el componente `router-outlet`:

```html
<!-- app.component.html -->

<router-outlet></router-outlet>
```

Donde el `router-outlet` se reemplazará por el contenido del componente según la URL en la que estés

### Páginas no encontradas (not-found)

Para definir una página no encontrada podemos utilizar la ruta `'**'` que simboliza cualquier ruta diferente a las anteriormente definidas, el componente también deberá de ser el objeto del componente importado.

```js
  {
    path: '**',
    component: NotFoundComponent
  }
```

> Nota: El orden de las rutas **es importante**, si algo matchea una ruta, no se segirá a la siguiente, por lo que el not-found, debería de ser la última ruta, siempre

### Redirecciones

Para las redirecciones tenemos que usar las propiedades `redirectTo:'route'` y `pathMatch:'full'` 

```typescript
  {
    path: 'from',
    redirectTo: 'to',
    pathMatch: 'full'
  },
```

Donde:

- `path`: Página actual
- `redirectTo`: página a la que se redireccionará
- `pathMatch`: tipo de match, en el caso de 'full' será con una relación exacta

### Redirecciones sin recargar `routerLink`

Para poder movernos entre rutas sin recargar nuestra página (tipo single page application) debemos agregar a nuestras anclas '`<a>`'  la directiva **`routerLink`** envés del atributo **`href`** para que Angular determine que no haga una recarga de la página.

```html
<div>
     <a routerLink="/home">Home</a> <!-- Antes <a href="/home">Home</a> -->
</div>
```

### Ancla activa `routerLinkActive`

Puedes definir una clase para cuando una ruta matchee completamente al agregar la directiva `routerLinkActive`, misma que agregará una clase al elemento que contenga un `routerLink`, de esta manera en los estilos podrás acceder al elemento seleccionado.

La recomendación es llamar "`active`" al routerLinkActive (`routerLinkActive="active">`), de esta manera podrás acceder desde el css mediante la clase `.active`

**html**

```html
<nav>
    <a routerLink="/home" routerLinkActive="active">Home</a>
    <a routerLink="/products" routerLinkActive="active">Products</a>
    <a routerLink="/contact" routerLinkActive="active">Contact</a>
</nav>
```

**scss**

```css
nav a {
  padding: 5px;
  text-decoration: none;
  &.active {
    background-color: papayawhip;
  }
}
```

Así se vería un `app-routing.module.ts` completo:

```typescript
... // importaciones
const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

### Vistas Anidadas

A veces existen componentes que se utilizan en varios otros componentes, para esto existe la técnica de vistas anidadas, la cual consiste en crear un componente que albergue los elementos que se repiten y los otros componentes que los utilizan serán rutas hijas del componente creado anteriormente.

Primero creamos el componente que almacena los elementos con el comando ‘ng g c nombreComponente’

Luego en los archivos del componente se almacenan los elementos que se utilizaran repetitivamente en otros componentes. En el archivo html se utiliza la etiqueta router-oulet para renderizar los componentes que se quieren cargar, y los elementos repetitivos se especifican.

```html
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
```

En el archivo routing se incorpora el componente creado anteriormente en la variable de routes, pero esta vez todos los componentes que se basen en este deberán estar anidadas. Para anidarlos el objeto del componente creado tendrá que tener una nueva característica ‘children’, el cual tendrá los ‘path’ y ‘component’ de las rutas que se basen en la anterior.

```typescript
constroutes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full',
        },
        {
          path: 'home',
          component: HomeComponent
        },
        ...
      ]
    },
    {
      path: 'demo',
      component: DemoComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];
```



# Servicios

Los servicios proveen datos esencialmente. La forma de crear un servicio es en la terminal con los comandos ‘ng g s nombreServicio’.
Por lo general tenemos 2 métodos esenciales en los servicios, uno para obtener todos los objetos guardados en una variable, y otro para obtener 1 objeto especifico.

```typescript
export class someService {

  store = [
    {
      id: '1',
      title: 'title',
      price: 10,
    },
    {
      id: '2',
      title: 'title',
      price: 20,
    }
  ];

  constructor() { }

  getAllStored() {
    returnthis.store;
  }

  getStored(id: string) {
    returnthis.store.find(item => id === item.id);
  }
}
```

- El método getAllStored() devuelve todos los objetos almacenados en la variable.
- El método getStored() devuelve 1 objeto especifico almacenado en la variable, en este caso se utiliza la variable id para buscar este objeto.

**Componente para objetos**
A veces es necesario crear componentes para desplegar la información de un solo objeto que provee un servicio. Para eso creamos un componente en la terminal con el comando ‘ng g c nombreComponente’

Luego de esto debemos asignarle una ruta en el archivo de routing, pero en esta ocasión tendrá un parámetro dinámico que se enviará.

```typescript
const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'product',
      component: ProductComponent
    }
    {
      path: 'product/:id',
      component: ProductDetailComponent
    }

];
```

En el componente creado debemos realizar 2 importaciones de dependencias, estos son ‘ActivatedRoute’ y ‘Params’ de ‘@angular/router’. *Nota: no olvidar que las inyecciones de dependencia deben ingresarse como parámetro en el constructor.*

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {};

}
```

Desde el ngOnInit() es la forma adecuada de recibir el parámetro definido anteriormente en la ruta, y se suscribe a el por si existen cambios, esto para ejecutar los cambios en la pagina por si cambia la ruta. La variable definida en la suscripción es de tipo Params que fue importado anteriormente.

```typescript
ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
    });
  }
```

En el método anterior capturamos el valor de id en params. *Es importante aclarar que params es un json.*

Ahora para consultar los objetos de un servicio debemos importar el servicio en sí. Con ello tendremos acceso a sus datos y métodos. *Los servicios son inyecciones de dependencia, por lo que hay que ingresarlos en el constructor.*

```typescript
import { ProductsService } from'./../products.service';
constructor(
        private route: ActivatedRoute,
        private productsService: ProductsService
){ }
```

El servicio importado en este caso tiene un método que devuelve un objeto especifico en formato json que se busca a través de su id, por ello se solicita una variable de entrada que se utiliza para buscar dicho objeto. En el siguiente caso se guarda el objeto en una variable y se imprime por consola.

```typescript
ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      const product = this.productsService.getProduct(id);
      console.log(product);
    });
  }
```

# **Modularizacion**

Un modulo encapsula varios elementos de una aplicación. Por lo general se modulariza cada vista de nuestra aplicación. Para crear un modulo se utiliza el comando ‘ng g m nombreModulo’

Es buena practica crear un modulo por vista, y dentro este una carpeta ‘components’ con los componentes que utilizara.

En los módulos existe un archivo ‘nombreModulo.module.ts’ el cual tendrá que importar los componentes que utilizara. En el ‘@ngModule’ se debe declarar los componentes que utilizara, y exportar los que se utilizaran en otros módulos.

```typescript
import { NgModule } from '@angular/core';

import { BannerComponent } from '../components/banner/banner.component';
import { HomeComponent } from'./home.component';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
})

export class HomeModule {

}
```

También los módulos tienen un archivo routing ‘nombreModulo-routing.module.ts’ en el cual se deben definir las rutas del modulo.

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

constroutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
```

Luego de terminar con el archivo routing, este debe importarse al archivo ‘nombreModulo.module.ts’ para ser utilizado.

```typescript
import { NgModule } from'@angular/core';

import { BannerComponent } from'./components/banner/banner.component';
import { HomeComponent } from'./home.component';

import { HomeRoutingModule } from'./home-routing.module';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    HomeRoutingModule
  ]
})
exportclassHomeModule {

}
```

## Lazy 

Es una técnica que ayuda a reducir el peso de las aplicaciones, de esta forma carga mas rápido el proyecto. La carga inicial de una pagina no debería ser Lazy ya que necesitamos que se cargue de una, como por ejemplo el Home.

La forma en que funciona es que el navegador realiza un request del html, el cual contiene las instrucciones de carga (archivos css, js e imágenes) y cuando identifica los archivos que necesita para cargar el modulo, realiza otro request para pedir dichos archivos. Para aplicar esta técnica es necesario modularizar la aplicación.

Cuando ya esta modularizado, hay que definir una ruta inicial en el archivo routing del modulo.

```typescript
import { HomeComponent } from './components/home/home.component';

constroutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
```

Ahora en el app-routing cargamos la ruta del modulo con **loadChildren**, de esta forma se carga dinámicamente. De esta forma resolvemos todo un modulo (no un componente únicamente).

```typescript
constroutes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full',
        },
        {
          path: 'home',
          loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        }
      ]
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];
```

Ahora tenemos que hacer que la aplicación realice una precarga de los otros módulos de las otras vistas cuando la vista que estamos consultando ya termine. Para realizarlo en el archivo ‘app-routing’ debemos cambiar de estrategia de carga, precargando los archivos con **‘PreloadAllModules’**. *No olvidar importar ‘PreloadAllModules’*

```typescript
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

  @NgModule({
    imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
  })
```

# [Creando vistas con Angular schematic](https://material.angular.io/guide/schematics)

*Schematics* es una forma de crear archivos o reglas desde el CLI (command line interfaces), material ya tiene incluídos algunos schematics muy útiles para poder crear componentes de uso regular.

Para poder crear un schematic tienes que tener instalado `'angular/cdk'`, mismo que viene por defecto al instalar Angular desde el CLI, pero que se tiene que instalar si no llegasen a funcionar los comandos.

Los schematics generan código, así que [busca en la documentación que quieres crear](https://material.angular.io/guide/schematics) y pégalo en la línea de comandos, por ejemplo:

```
ng generate @angular/material:dashboard admin/components/dashboard

ng generate @angular/material:table admin/components/list-products

ng generate @angular/material:navigation admin/components/nav

ng generate @angular/material:address-form admin/components/product-form
```

# [`HtttpClient`](https://angular.io/guide/http)

La mayoría de las aplicaciones front-end se comunican con los servicios de back-end a través del protocolo HTTP. Los navegadores modernos admiten dos API diferentes para realizar solicitudes HTTP: la interfaz XMLHttpRequest y la API fetch(), pero Angular implementa su propia interfaz basada en XMLHttpRequest para facilitar el fetching de datos, api expuesta por los navegadores.

`HttpClient` viene desde `@angular/common/http` y ofrece una interfaz API HTTP de cliente simplificada para aplicaciones Angular.

Los beneficios adicionales de **HttpClient** incluyen: 

- Suite de **pruebas** simplificadas
- Requests y responses **tipados**
- **Intercepción** de requests y responses
- **Observables**
- Manejo de **errores** optimizado (mediante streams)

.

Para trabajar con HttpClient tenemos que crear un objeto de tipo HttpClient:

```typescript
import { HttpClient } from '@angular/common/http';
export class ProductsService {
  constructor( private http: HttpClient ) {}
}
```

HttpClient provee métodos http basados en los verbos de protocolos http, por lo tanto podemos facilitar una capa de servicios que implemente los métodos específicos de cada acción http:

```typescript
export class ProductsService {
  ...
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }
  ...
}
```

Algunos de los métodos que podríamos utilizar son:

- `http.get`
- `http.post`
- `http.put`
- `http.patch`
- `http.put`

Por lo tanto así se vería una capa de servicios en Angular basados en `HttpClient`

```typescript
@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor( private http: HttpClient ) {}
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }
  createProduct(product: Product): any {
    return this.http.post(`${environment.url_api}/products`, product);
  }
  updateProduct(id: string, changes: Partial<Product>): any {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }
  deleteProduct(id: string): any {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
```

# Ambientes en Angular

Un entorno de aplicación en Angular (environment) es información de configuración JSON que le dice al sistema de compilación qué archivos cambiar cuando usa ng build y ng serve.

La recomendación es hacer ambientes dentro del directorio `environments/environment.[nombre].ts`, y para registrarlo necesitas modificar el archivo `angular.json`

Para agregar un nuevo ambiente al `angular.json` se necesitan duplicar el environment de **`build`** y de **`serve`** dentro de **projects.<project-name>.architect.build.configurations.nameOfNewEnvironment** y de **projects.<project-name>.architect.serve.configurations.production** y cambiar production por el nombre que quieras que reciba tu environment, como staging o local, etc.

Recuerda que es muy delicado este archivo y que lo tienes que hacer a conciencia, además de que tienes que colocar la ruta de tu archivo de environments en `fileReplacements`, porque lo que hace este archivo es reemplazar las ocurrencias de importación de `src/environments/environment.ts` por el archivo de ambiente que le indiques.

```json
{
  projects: {
    nameOfProject: {
      ...
      architect: {
        build: {
          ...
          production: {} <-- Duplicar este objeto
        },
        serve: {
          configurations: {
            ...
            production: {} <-- Duplicar este objeto
          }
        }
      }
    }
  }
}
```

# Formularios Reactivos

Los formularios reactivos ayudan a manejar entradas de formulario cuyos valores cambian con un enfoque explícito e inmutable para administrar el estado de un formulario en un momento dado.

Los formularios reactivos difieren de los [formularios basadas en plantillas](https://angular.io/guide/forms) en los siguientes puntos.

- Las formas reactivas son predecibles al ser síncronas con el modelo de datos
- Son inmutables, por lo tanto cada cambio en el estado del formulario devuelve un nuevo estado,
- seguimiento de cambios a través de streams observables.

- Proporcionan una ruta directa a las pruebas porque tiene la seguridad de que sus datos son consistentes y predecibles cuando se solicitan.
- Cualquier consumidor de los streams tiene acceso para manipular estos datos de manera segura
- Se construyen alrededor de [observable](https://angular.io/guide/glossary#observable) streams

Además proveen métodos más sencillos para:

- La validación de datos
- Realización de pruebas unitarias:  porque tienes la seguridad de que sus datos son consistentes y predecibles al momento de solicitarlos.
- Tener lógicas más complejas

## `FormControl`

Un input de tipo FormControl permite la anidación de validadores (ValidatorFn) con los que podemos de manera sencilla validar la fuente de datos.

```typescript
FormControl(
  formState?: any, 
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions, 
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]
): FormControl
```

Se definen detro de una variable de tipo `FormControl()` y se pueden llamar en el template:

```typescript
// component.component.ts
export class Component implements OnInit {
  emailField: FormControl;
  constructor() {
    this.emailField =  new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(4),
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ]);
  }
}
```

```html
<!-- component.component.html -->
<input type="email" [formControl]="emailField">
{{ emailField.valid }} <!-- Imprime true o false si el input es válido -->
```



# Reactive programming

- [Rxjs](https://rxjs-dev.firebaseapp.com/guide/)
- [Operators](https://rxjs-dev.firebaseapp.com/guide/operators)

