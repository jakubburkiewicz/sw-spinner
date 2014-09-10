sw-spinner
==========

Loading spinner directive for AngularJS

Installation
------------
```
bower install sw-spinner --save
```
```
angular.module('myModule', ['sw-spinner']);
```

Directives
----------
```
// Spinner element
<sw-spinner></sw-spinner>

// Additional overlay - simply block mouse events on data loading.
<sw-spinner-overlay></sw-spinner-overlay>
```

Events
------
```
// Start spinner (with label)
$rootScope.$broadcast(SPINNER.start, { label: 'Lorem ipsum...' });

// Stop spinner
$rootScope.$broadcast(SPINNER.stop);
```

Sample styles (LESS)
------------------------
```
.spinner {
  > i {
    display: block;
    width: 24px;
    height: 24px;

    opacity: 0;

    margin: 0px auto 15px;

    font-size: 24px;
    color: #cccccc;

    transition: opacity 0.3s;

    &:before {
      display: inline-block;

      -webkit-animation: spin 2s infinite linear;
      -moz-animation: spin 2s infinite linear;
      -ms-animation: spin 2s infinite linear;
      -o-animation: spin 2s infinite linear;
      animation: spin 2s infinite linear;
    }
  }

  > label {
    display: block;

    opacity: 0;

    font-size: 10px;
    font-weight: normal;
    color: #666666;
    text-align: center;

    transition: opacity 0.3s;
  }

  &.spin {
    > i {
      opacity: 1;
    }

    > label {
      opacity: 1;
    }
  }
}

.spinner-overlay {
  display: none;

  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 9999;

  &.visible {
    display: block;
  }
}

@-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
```
