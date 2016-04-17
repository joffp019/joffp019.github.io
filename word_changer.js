            var word_changer = function() {
                var add_prefix = function(prefix, word) {
                    return prefix + word;
                };
                
                return {
                    add_prefix: add_prefix
                };
            }();