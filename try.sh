# Make a script to count the number of problem directories.
(Get-ChildItem -Path ./src | Measure-Object).Count