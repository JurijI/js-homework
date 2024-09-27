
        // Задание 1: Объединить два массива
        let array1 = ['a', 'b', 'c'];
        let array2 = [1, 2, 3];
        let combinedArray = array1.concat(array2);
        document.write('Задание 1, Combined Array:', combinedArray + '<br>');

        // Задание 2: Добавить элементы к массиву ['a', 'b', 'c']
        array1.push(1, 2, 3);
        document.write('Задание 2, Array after adding elements:', array1 + '<br>');

        // Задание 3: Сделать массив [1, 2, 3] -> [3, 2, 1]
        let array3 = [1, 2, 3];
        array3.reverse();
        document.write('Задание 3, Reversed Array:', array3 + '<br>');

        // Задание 4: Добавить элементы к массиву [1, 2, 3] в конец 4,5,6
        let array4 = [1, 2, 3];
        array4.push(4, 5, 6);
        document.write('Задание 4, Array after adding elements to end:', array4 + '<br>');

        // Задание 5: Добавить элементы к массиву [1, 2, 3] в начало 4,5,6
        let array5 = [1, 2, 3];
        array5.unshift(4, 5, 6);
        document.write('Задание 5, Array after adding elements to start:', array5 + '<br>');

        // Задание 6: Вывести первый элемент массива ['js', 'css', 'jq']
        let array6 = ['js', 'css', 'jq'];
        document.write('Задание 6, First element:', array6[0] + '<br>');

        // Задание 7: Записать новые элементы с помощью slice
        let array7 = [1, 2, 3, 4, 5];
        let slicedArray = array7.slice(0, 3);
        document.write('Задание 7, Sliced Array:', slicedArray + '<br>');

        // Задание 8: Преобразовать массив с помощью splice
        let array8 = [1, 2, 3, 4, 5];
        array8.splice(1, 2);
        document.write('Задание 8, Spliced Array:', array8 + '<br>');

        // Задание 9: Преобразовать массив с помощью splice [1, 2, 10, 3, 4, 5]
        let array9 = [1, 2, 3, 4, 5];
        array9.splice(2, 0, 10);
        document.write('Задание 9, Array after splice insert:', array9 + '<br>');

        // Задание 10: Дан масив [3, 4, 1, 2, 7] Отсортировать массив

        let array10 = [3, 4, 1, 2, 7];
        array10.sort();
        document.write('Задание 10, Sorted Array:', array10 + '<br>');

        // Задание 11 Дан массив с элементами 'Привіт, ', 'світ' і '!'.. Нужно вывести на экран фразу 'Привiт, мир!'.
        let greetingArray = ['Привіт, ', 'світ', '!'];
        greetingArray[1] = 'мир';
        document.write('Задание 11: ' + greetingArray.join('') + '<br>');

        // Задание 12 Дан масив ['Привіт, ', 'світ', '!']. Необхідно записати в нульовий елемент цього масиву слово 'Поки, ' (тобто замість слова 'Привіт, ' буде 'Поки, ').
        greetingArray = ['Привіт, ', 'світ', '!'];
        greetingArray[0] = 'Поки, ';
        document.write('Задание 12: ' + greetingArray.join('') + '<br>');

        // Задание 13 Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами.
        let arr1 = [1, 2, 3, 4, 5]; // Создание массива с помощью литерала массива
        let arr2 = new Array(1, 2, 3, 4, 5);  // Создание массива с помощью конструктора массива
        document.write('Задание 13, способ 1: ' + arr1.join(', ') + '<br>');
        document.write('Задание 13, способ 2: ' + arr2.join(', ') + '<br>');

        // Задание 14 Дан багатовимірний масив arr:
        /*var arr = [
                    ['блакитний', 'червоний', 'зелений'],
                    ['blue', 'red', 'green'],
                ];
             Виведіть за його допомогою слово 'блакитний' 'blue' .
   
                */
        let multiArray = [
            ['блакитний', 'червоний', 'зелений'],
            ['blue', 'red', 'green']
        ];
        document.write('Задание 14: ' + multiArray[0][0] + ' ' + multiArray[1][0] + '<br>');

        // Задание 16 Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'.
        let arr = ['a', 'b', 'c', 'd'];
        document.write('Задание 16: ' + arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3] + '<br>');

        // Задание 17
        /* Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач
         створіть масив на ту кількість елементів, яку передав користувач.
         у кожному індексі масиву зберігайте чило який показуватиме номер елемента масиву.
        */
        let elementCount = parseInt(prompt("Введите количество элементов массива:"));
        let userArray = [];
        for (let i = 0; i < elementCount; i++) {
            userArray.push(i + 1);
        }
        document.write('Задание 17: ' + userArray.join(', ') + '<br>');

        // Задание 18
        /*Зробіть так, щоб з масиву, який
         ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані
          з червоним тлом.
        */
        document.write('Задание 18: ');
        for (let i = 0; i < userArray.length; i++) {
            if (userArray[i] % 2 === 0) {
                document.write('<span style="color: red;">' + userArray[i] + '</span> ');
            } else {
                document.write('<p>' + userArray[i] + '</p>');
            }
        }

        // Задание 19
        /*Напишіть код, який перетворює та об'єднує всі елементи масиву
         в одне рядкове значення. Елементи масиву будуть розділені комою.

          var vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морковка']
                // Ваш код
                document.write(str1); // "Капуста, Ріпа, Редиска, Морквина"
        */
        let vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морковка'];
        let str1 = vegetables.join(', ');
        document.write('<br>Задание 19: ' + str1  + '<br>'  + '<br>');

        
