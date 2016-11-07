Q: Можете ли вы сопоставить Таблицы (SQL) и Массива (JS) с точки зрения заложенных идей? Что между ними общего и каковы различия?
A: Массив хуже подходит для хранения больших обьемов данных, а SQL гораздо хуже масштабируется в плане DDL.

Q: Какие БД вам знакомы? Какие критерии выбора БД вы можете предложить?
A: Postgres, MySQl, Percona, Mariadb, mongodb (без учета k-v хранилищ типа редиски и мемкеша)

Q: Какую БД вы выбрали бы для (бизнес-версии) вашего проекта? Почему?
A: Postgres. Быстрая, мощнее SQL-синтаксис (более приближено к ANSI SQL), 
есть jsonb движок, нормальная репликация (в отличии от MySQL), куча разных типов индексов (не только btree, но и BRIN)

Q: Объясните, своими словами, что такое объекты первого класса?
A: Обьекты первого класса поддерживают _все_ возможные операции над ними, 
а обьекты более низших классов поддерживают только некоторые из операций возможных над обьектом первого класса.

Q: В чём разница между статической и динамической типизацией? Какие преимущества той и другой, с вашей точки зрения?
A: При статической типизации мы не можем переназначить _тип_ переменной, при динамической - можем. 
Статическая типизация (код работает быстрее, разработка медленнее) обычно используется в компилируемых 
ЯП (Go, C), динамическая - в интерпретируемых (пишем быстрее, но при каждом обращении к переменной надо определить ее тип)

Q: Чем отличаются понятия Модели и Типа?
A: Еслия правильно понял, это вопрос и типе данных и модели данных в БД? 
Если так - то модель данных более высокоуровневая структура, чем тип. Слишком общий вопрос, нужно конкретезировать ИМХО.

Q: Для чего можно использовать Типы первого класса?
A: Если в плане применения к БД - то у меня мысли о primary key.