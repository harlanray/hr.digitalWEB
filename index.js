// import {computePosition, size} from '@floating-ui/dom';
 
// computePosition(referenceEl, floatingEl, {
//   middleware: [
//     size({
//       apply({availableWidth, availableHeight, elements,}) {
//         // Do things with the data, e.g.
//         Object.assign(elements.floating.style, {
//           maxWidth: `${availableWidth}px`,
//           maxHeight: `${availableHeight}px`,
//         });
//       },
//     }),
//   ],
// });


document.addEventListener('click', function (event) {
    var target = event.target;
    var navbar = document.querySelector('.navbar');
    var isClickInsideNavbar = navbar.contains(target);
    if (!isClickInsideNavbar) {
      var collapses = navbar.querySelectorAll('.collapse');
      collapses.forEach(function (collapse) {
        var isExpanded = collapse.classList.contains('show');
        if (isExpanded) {
          collapse.classList.remove('show');
        }
      });
    }
  });
  
  

const links = document.querySelectorAll('.navbar .nav-link')
links.forEach(function(link) {
    link.addEventListener('click', function() {
        let collapses = document.querySelectorAll('.collapse')
        collapse.forEach(function(collapse) {
            if(collapse.classList.contains('show')) {
                collapse.classList.remove('show')
            }
        })
    })
})