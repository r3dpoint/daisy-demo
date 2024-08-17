<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="fglight">

<head>
    <meta charset="utf-8" />
    <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover" />
    <title>PHP Demo</title>
    @vite('resources/css/app.css')
</head>

<body>
    <div class="h-full p-8">
        <div class="flex flex-col gap-8">
            <div>
                <input
                    type="checkbox"
                    value="fgdark"
                    class="theme-controller toggle" />
            </div>
            <div class="flex items-center gap-2 border p-8">
                <img
                    alt="Anduril"
                    class="h-12 w-12"
                    src="https://logo.clearbit.com/anduril.com" />
                <button class="btn btn-primary">Button</button>
                <h1 class="font-bold">Anduril Industries</h1>
            </div>
        </div>
    </div>
</body>

</html>
