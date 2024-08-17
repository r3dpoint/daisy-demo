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
            <div class="flex flex-row justify-between border p-8">
                <div class="flex items-center gap-1">
                    <img
                        alt="Anduril"
                        class="h-10 w-10"
                        src="https://logo.clearbit.com/anduril.com" />
                    <h2 class="text-3xl font-normal">Anduril Industries IPO</h2>
                </div>
                <div class="flex justify-end">
                    <button class="btn btn-primary h-8 w-20">Buy</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
