var users = [
    {
        name: 'Lucy',
        gender: 'F',
        age: 20,
        hobby: 'pets',
        avatar: 'avatar1.png'        
    },
    {
        name: 'Betty',
        gender: 'F',
        age: 18,
        hobby: 'pets',
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        age: 25,
        hobby: 'music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Christopher',
        gender: 'M',
        age: 23,
        hobby: 'sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        age: 30,
        hobby: 'reading',
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        age: 45,
        hobby: 'shopping',
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        age: 21,
        hobby: 'pets',
        avatar: 'avatar7.png'
    },
];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    
    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        
        //get min age
        var minAge = document.getElementById("minAge").value;

        //get max age
        var maxAge = document.getElementById("maxAge").value;
        

        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    if (minAge <= users[i].age && maxAge >= users[i].age){
                        resultsHtml += '<div class="person-row">\
                           <img src="images/' + users[i].avatar + '" />\
                           <div class="person-info">\
                           <div>' + users[i].name + '</div>\
                           <div>' + users[i].age + '</div>\
                           <div>' + users[i].hobby + '</div></div>\
                            <button>Add as friend</button></div>';
                    }  
                }
            }
        }
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});