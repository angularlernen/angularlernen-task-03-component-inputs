Component inputs
==============================

### Introduction

For now, our _profile-picture_ component is somehow static. Wouldn't it be nice to parametrize it?

Let's introduce some _inputs_!

Take a look on our component; on the _scss_ and the _ts_ file. Are you able to identify some potential inputs?

### Task

1. Take a look on your components _scss_ file. Introduce for each identified potential input a decorated input property on your components class.

Example: `@Input() diameter: number`

2. Take a look on your components _ts_ file (the class file). Introduce for each identified potential input a decorated input property.

Example: `@Input() pictureUrl: string`

3. Decide whether you want to provide default values for each of your inputs.

4. Apply _DOM property binding_: Bind each of your custom component inputs to a _DOM property_  

5. Is every given input directly boundable? Maybe you need a computed property?


### HOWTOs

#### Example:

In the _profile-picture.component.html_:
```html
<div [style.width.px]="diameter" 
     [style.height.px]="diameter"
     [style.backgroundColor]="frameColor">
  ...
</div>     
```

In the _profile-picture.component.ts_:
```ts
  @Input() diameter = 120; // 120 is the default value.
  @Input() frameWidth = 5;

  get innerDiameter(): number { // computed property
    return this.diameter - this.frameWidth;
  }


```
