<html>


<script>
      $(document).ready( function() {

        const mySlides = [
        { src: "https://picsum.photos/id/1/1900/1200", title: "Title #1", subtitle: "Subtitle #1" },
        { src: "https://picsum.photos/id/10/1900/1200", title: "Title #2", subtitle: "Subtitle #2"  },
        { src: "https://picsum.photos/id/100/1900/1200", title: "Title #3", subtitle: "Subtitle #3"  },
        { src: "https://picsum.photos/id/1000/1900/1200", title: "Title #4", subtitle: "Subtitle #4"  },
      ]
        
        $("#background-image").vegas({
            overlay: 'vegas/overlays/02.png',
            slides: mySlides,
            walk: function (index, slideSettings) {
                  $(".text-block h1").html(mySlides[index].title)
                  $(".text-block h4").html(mySlides[index].subtitle)
            }
        })

      })  
    </script>