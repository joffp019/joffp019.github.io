            var word_printer = function() {
                var print = function(word) {
                    console.warn(word);
                };
                
                var popup = function(word) {
                    alert(word);
                };
                
                var add_to_doc = function(word) {
                    document.body.innerHTML += word;
                };
                
                return {
                    print: print,
                    popup: popup,
                    insert: add_to_doc,
                };
            }();