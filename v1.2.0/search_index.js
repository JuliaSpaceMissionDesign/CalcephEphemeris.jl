var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"This package implements all of the required JSMD Interfaces for Ephemeris files, which  are already well-documented in JSMDInterfaces.","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [CalcephEphemeris]\nOrder = [:type, :function]","category":"page"},{"location":"api/#CalcephEphemeris.CalcephProvider","page":"API","title":"CalcephEphemeris.CalcephProvider","text":"CalcephProvider(file::String)\nCalcephProvider(files::Vector{String})\n\nCreate a CalcephProvider instance by loading a single or multiples ephemeris kernel  files specified by files.\n\nnote: Note\nOnce the object is created kernels cannot be added nor removed from the  generated CalcephProvider instance.  \n\nExample\n\njulia> eph1 = CalcephProvider(\"PATH_TO_KERNEL\")\n1-kernel CalcephProvider\n \"PATH_TO_KERNEL\"\n\njulia> eph2 = CalcephProvider([\"PATH_TO_KERNEL_1\", \"PATH_TO_KERNEL_2\"])\n2-kernel CalcephProvider:\n \"PATH_TO_KERNEL_1\"\n \"PATH_TO_KERNEL_2\"\n\n\n\n\n\n","category":"type"},{"location":"#CalcephEphemeris.jl-API","page":"Home","title":"CalcephEphemeris.jl API","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A lightweight CALCEPH wrapper for the JSMD ecosystem. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package is a lightweight wrapper around CALCEPH_jll.jl that implements the JSMDInterfaces.jl interfaces to extract data from SPICE and INPOP ephemeris kernels. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"The CALCEPH is a C++ library written by the research team Astronomie et systèmes dynamiques  (CNRS/Observatoire de Paris/IMCCE). For further information on CALCEPH visit its  official website. Inspiration for this package has been taken from the original Julia's CALCEPH.jl  wrapper.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package can be installed using Julia's package manager:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> import Pkg; \n\njulia> Pkg.add(\"CalcephEphemeris.jl\")","category":"page"}]
}
