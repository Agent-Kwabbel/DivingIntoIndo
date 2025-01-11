// "use client"
//
// import * as React from "react"
// import {
//     ColumnDef,
//     ColumnFiltersState,
//     SortingState,
//     VisibilityState,
//     flexRender,
//     getCoreRowModel,
//     getFilteredRowModel,
//     getPaginationRowModel,
//     getSortedRowModel,
//     useReactTable,
// } from "@tanstack/react-table"
// import { ArrowUpDown, ChevronDown, MoreHorizontal, Pencil, Tags, Trash2, Eye } from 'lucide-react'
//
// import { Button } from "~/components/ui/button"
// import { Checkbox } from "~/components/ui/checkbox"
// import {
//     DropdownMenu,
//     DropdownMenuCheckboxItem,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "~/components/ui/dropdown-menu"
// import { Input } from "~/components/ui/input"
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "~/components/ui/table"
// import { Badge } from "~/components/ui/badge"
//
// // This would typically come from your database
// const data: BlogPost[] = [
//     {
//         id: "1",
//         title: "10 Must-Visit Places in Japan",
//         status: "published",
//         category: "Travel",
//         author: "John Doe",
//         date: "2024-03-10",
//         views: 1234,
//         tags: ["japan", "travel", "culture"],
//     },
//     {
//         id: "2",
//         title: "Traditional Japanese Cuisine",
//         status: "draft",
//         category: "Food",
//         author: "Jane Smith",
//         date: "2024-03-09",
//         views: 856,
//         tags: ["food", "japan", "cooking"],
//     },
//     {
//         id: "3",
//         title: "Hiking Mount Fuji",
//         status: "published",
//         category: "Adventure",
//         author: "Mike Johnson",
//         date: "2024-03-08",
//         views: 2341,
//         tags: ["hiking", "mountain", "japan"],
//     },
//     // Add more sample data as needed
// ]
//
// export type BlogPost = {
//     id: string
//     title: string
//     status: "published" | "draft"
//     category: string
//     author: string
//     date: string
//     views: number
//     tags: string[]
// }
//
// export function BlogPostsTable() {
//     const [sorting, setSorting] = React.useState<SortingState>([])
//     const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
//     const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
//     const [rowSelection, setRowSelection] = React.useState({})
//
//     const columns: ColumnDef<BlogPost>[] = [
//         {
//             id: "select",
//             header: ({ table }) => (
//                 <Checkbox
//                     checked={
//                         table.getIsAllPageRowsSelected() ||
//                         (table.getIsSomePageRowsSelected() && "indeterminate")
//                     }
//                     onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//                     aria-label="Select all"
//                 />
//             ),
//             cell: ({ row }) => (
//                 <Checkbox
//                     checked={row.getIsSelected()}
//                     onCheckedChange={(value) => row.toggleSelected(!!value)}
//                     aria-label="Select row"
//                 />
//             ),
//             enableSorting: false,
//             enableHiding: false,
//         },
//         {
//             accessorKey: "title",
//             header: ({ column }) => {
//                 return (
//                     <Button
//                         variant="ghost"
//                         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//                     >
//                         Title
//                         <ArrowUpDown className="ml-2 h-4 w-4" />
//                     </Button>
//                 )
//             },
//             cell: ({ row }) => (
//                 <div className="flex items-center">
//                     <span className="max-w-[500px] truncate font-medium">{row.getValue("title")}</span>
//                 </div>
//             ),
//         },
//         {
//             accessorKey: "status",
//             header: "Status",
//             cell: ({ row }) => {
//                 const status = row.getValue("status") as string
//                 return (
//                     <Badge variant={status === "published" ? "default" : "secondary"}>
//                         {status}
//                     </Badge>
//                 )
//             },
//         },
//         {
//             accessorKey: "category",
//             header: "Category",
//             cell: ({ row }) => <div>{row.getValue("category")}</div>,
//         },
//         {
//             accessorKey: "author",
//             header: "Author",
//             cell: ({ row }) => <div>{row.getValue("author")}</div>,
//         },
//         {
//             accessorKey: "date",
//             header: ({ column }) => {
//                 return (
//                     <Button
//                         variant="ghost"
//                         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//                     >
//                         Date
//                         <ArrowUpDown className="ml-2 h-4 w-4" />
//                     </Button>
//                 )
//             },
//             cell: ({ row }) => <div>{new Date(row.getValue("date")).toLocaleDateString()}</div>,
//         },
//         {
//             accessorKey: "views",
//             header: ({ column }) => {
//                 return (
//                     <Button
//                         variant="ghost"
//                         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//                     >
//                         Views
//                         <ArrowUpDown className="ml-2 h-4 w-4" />
//                     </Button>
//                 )
//             },
//             cell: ({ row }) => <div>{row.getValue("views")}</div>,
//         },
//         {
//             accessorKey: "tags",
//             header: "Tags",
//             cell: ({ row }) => {
//                 const tags = row.getValue("tags") as string[]
//                 return (
//                     <div className="flex flex-wrap gap-1">
//                         {tags.map((tag) => (
//                             <Badge key={tag} variant="outline">
//                                 {tag}
//                             </Badge>
//                         ))}
//                     </div>
//                 )
//             },
//         },
//         {
//             id: "actions",
//             enableHiding: false,
//             cell: ({ row }) => {
//                 const post = row.original
//
//                 return (
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button variant="ghost" className="h-8 w-8 p-0">
//                                 <span className="sr-only">Open menu</span>
//                                 <MoreHorizontal className="h-4 w-4" />
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end">
//                             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                             <DropdownMenuItem onClick={() => navigator.clipboard.writeText(post.id)}>
//                                 <Eye className="mr-2 h-4 w-4" />
//                                 View Post
//                             </DropdownMenuItem>
//                             <DropdownMenuItem>
//                                 <Pencil className="mr-2 h-4 w-4" />
//                                 Edit
//                             </DropdownMenuItem>
//                             <DropdownMenuItem>
//                                 <Tags className="mr-2 h-4 w-4" />
//                                 Edit Tags
//                             </DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem className="text-destructive">
//                                 <Trash2 className="mr-2 h-4 w-4" />
//                                 Delete
//                             </DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 )
//             },
//         },
//     ]
//
//     const table = useReactTable({
//         data,
//         columns,
//         onSortingChange: setSorting,
//         onColumnFiltersChange: setColumnFilters,
//         getCoreRowModel: getCoreRowModel(),
//         getPaginationRowModel: getPaginationRowModel(),
//         getSortedRowModel: getSortedRowModel(),
//         getFilteredRowModel: getFilteredRowModel(),
//         onColumnVisibilityChange: setColumnVisibility,
//         onRowSelectionChange: setRowSelection,
//         state: {
//             sorting,
//             columnFilters,
//             columnVisibility,
//             rowSelection,
//         },
//     })
//
//     return (
//         <div className="space-y-4">
//             <div className="flex items-center justify-between">
//                 <div className="flex flex-1 items-center space-x-2">
//                     <Input
//                         placeholder="Filter posts..."
//                         value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
//                         onChange={(event) =>
//                             table.getColumn("title")?.setFilterValue(event.target.value)
//                         }
//                         className="max-w-sm"
//                     />
//                 </div>
//                 <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <Button variant="outline" className="ml-auto">
//                             Columns <ChevronDown className="ml-2 h-4 w-4" />
//                         </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                         {table
//                             .getAllColumns()
//                             .filter((column) => column.getCanHide())
//                             .map((column) => {
//                                 return (
//                                     <DropdownMenuCheckboxItem
//                                         key={column.id}
//                                         className="capitalize"
//                                         checked={column.getIsVisible()}
//                                         onCheckedChange={(value) => column.toggleVisibility(!!value)}
//                                     >
//                                         {column.id}
//                                     </DropdownMenuCheckboxItem>
//                                 )
//                             })}
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             </div>
//             <div className="rounded-md border">
//                 <Table>
//                     <TableHeader>
//                         {table.getHeaderGroups().map((headerGroup) => (
//                             <TableRow key={headerGroup.id}>
//                                 {headerGroup.headers.map((header) => {
//                                     return (
//                                         <TableHead key={header.id}>
//                                             {header.isPlaceholder
//                                                 ? null
//                                                 : flexRender(
//                                                     header.column.columnDef.header,
//                                                     header.getContext()
//                                                 )}
//                                         </TableHead>
//                                     )
//                                 })}
//                             </TableRow>
//                         ))}
//                     </TableHeader>
//                     <TableBody>
//                         {table.getRowModel().rows?.length ? (
//                             table.getRowModel().rows.map((row) => (
//                                 <TableRow
//                                     key={row.id}
//                                     data-state={row.getIsSelected() && "selected"}
//                                 >
//                                     {row.getVisibleCells().map((cell) => (
//                                         <TableCell key={cell.id}>
//                                             {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                                         </TableCell>
//                                     ))}
//                                 </TableRow>
//                             ))
//                         ) : (
//                             <TableRow>
//                                 <TableCell colSpan={columns.length} className="h-24 text-center">
//                                     No results.
//                                 </TableCell>
//                             </TableRow>
//                         )}
//                     </TableBody>
//                 </Table>
//             </div>
//             <div className="flex items-center justify-end space-x-2">
//                 <div className="flex-1 text-sm text-muted-foreground">
//                     {table.getFilteredSelectedRowModel().rows.length} of{" "}
//                     {table.getFilteredRowModel().rows.length} row(s) selected.
//                 </div>
//                 <div className="space-x-2">
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => table.previousPage()}
//                         disabled={!table.getCanPreviousPage()}
//                     >
//                         Previous
//                     </Button>
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => table.nextPage()}
//                         disabled={!table.getCanNextPage()}
//                     >
//                         Next
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }