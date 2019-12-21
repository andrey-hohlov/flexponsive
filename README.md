# Flexponsive

Flex-based vertical and horizontal grid and media-breakpoints utilities in SASS-mixins

> Disclaimer: If you need just ready to use css grid and Bootstrap (or Flexgrid) fits your requirements - use it. Flexponsive doesn't provide a fundamentally different technical solution. Just another approach in naming and generation.  

**[Demo](https://andrey-hohlov.github.io/flexponsive/)**

## Conception

**container** - centered wrapper for page content

**cols** - container for grid columns

**col** - grid column

**rows** - container for grid rows, "eats" the last line indent

**row** - vertical grid element with bottom margin = grid gutter

Only ```col``` can be direct children of ```cols```.

```row``` can be used without ```rows```.
 
 *Trick with "eating" ```row``` margin by ```rows``` instead of using ```row + row``` selector and vertical margin* used to make it more flexible in nested grids.

Modifiers naming: ```class_[breakpoint-]modifier```.

First breakpoint skips in class name and applies as default. 

```html
<div class="grid grid_middle rows">
  <div class="col col_12 col_md-6 row"></div>
  <div class="col col_12 col_md-6 col_md-self-top row"></div>
  <div class="col col_12 col_md-6 row"></div>
</div>

```

## Usage

Ready to use css with Bootstrap default breakpoints and grid configuration available in ```dist/flexponsive.css```

Install via npm:

```npm i -S flexponsive```

### Generate with default params

```scss
@import "~flexponsive"; // or @import "~flexponsive/src/flexponsive";
```

### Modify variables

```scss
@import "~flexponsive/src/flexponsive-mixins";

$flexponsive-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
) !default;

$flexponsive-columns: 12 !default;

$flexponsive-gutters: (
  xs: 30px,
  sm: 30px,
  md: 30px,
  lg: 30px,
  xl: 30px,
) !default;

$flexponsive-container-max-widths: (
  xs: 100%,
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
) !default;

$flexponsive-container-class: container !default;

$flexponsive-cols-class: cols !default;

$flexponsive-col-class: col !default;

$flexponsive-rows-class: rows !default;

$flexponsive-row-class: row !default;

@include flexponsive-generate();
```

### Generate own grids

```scss
@import "~flexponsive/src/flexponsive-mixins";

$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
) !default;

$gutters: (
  xs: 30px,
  sm: 30px,
  md: 30px,
  lg: 30px,
  xl: 30px,
) !default;

$container-max-widths: (
  xs: 100%,
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
) !default;

// Default grid
@include flexponsive-generate-container-classes($breakpoints, $gutters, $container-max-widths, container);
@include flexponsive-generate-cols-classes($breakpoints, $gutters, cols);
@include flexponsive-generate-col-classes($breakpoints, $gutters, 12, col)
@include flexponsive-generate-rows-classes($breakpoints, $gutters, rows);
@include flexponsive-generate-row-classes($breakpoints, $gutters, row);

// Support 10-columns grid
@include flexponsive-generate-col-classes($breakpoints, $gutters, 10, col-of-10); 
```


## Modifiers

> Documentation in progress

### Container 

```_fluid``` - make container 100% width, ignore container max width

### Cols 

```_start```

```_center```

```_end```

```_between```

```_around```

```_top```

```_middle```

```_bottom```

```_reverse```

```_gapless```

```_nowrap```

```_wrap```

### Col 

```_auto```

```_offset-*```

```_push-*```

```_order-*```

```_first```

```_last```

```_self-top```

```_self-bottom```

```_self-middle```

```_filled```
