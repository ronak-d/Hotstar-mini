    //key = b408ff75

    async function searching_movie(){

        // document.getElementById("Search_bar").innerHTML = 

        // always call value inside the function of async //
        const userMovie = document.getElementById("Search_bar").value;
        
        try {
            let res = await fetch(`http://www.omdbapi.com/?apikey=b408ff75&s=${userMovie}`);

            let movie_data = await res.json();

            var send = movie_data.Search;

            console.log(movie_data);

            appenddata(send);

        } 
        catch (error) {
            console.log(error, "movie not found");
        }
    }
    searching_movie();


    function appenddata(send){

        show_movie.innerHTML = "";

        send.map((send) => {

            let div = document.getElementById("show_movie");

            let appendInsideThisDiv = document.createElement("div");
            appendInsideThisDiv.setAttribute("id","movieDiv")


            // let video = `http://img.omdbapi.com/?apikey=b408ff75`
            let video = send.Poster;

            // let videoTitle = `http://www.omdbapi.com/?apikey=[yourkey]&t=`
            let videoTitle = send.Title;

            // let videoType = `http://www.omdbapi.com/?apikey=[yourkey]&type=`
            let videoYear = send.Year;

            // ------------------------------------------------;
            let img = document.createElement("img");
            img.src = video;
            img.setAttribute("id", "resImg");

            // ----------------------------------------------
            let alignm = document.createElement("div")
            
            let tittle = document.createElement("h3");
            tittle.innerHTML = videoTitle;
            tittle.setAttribute("id", "resTitle");

            let year = document.createElement("h3");
            year.innerHTML = videoYear;
            year.setAttribute("id", "reYear")

            alignm.append(tittle,year);

            // ----;
            appendInsideThisDiv.append(img,alignm);

            div.append(appendInsideThisDiv);
            // div.append(img, alignm);

        });
    }