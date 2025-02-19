import { Mail, Phone, Clock, Calendar, Trash2, Check, Send, Star } from "lucide-react";
import { cn } from "../../utils/cn";


export default function ContactCard({ contact, index, openModal, handleDelete, handleStatusChange }) {
    return (
        <div
            className={cn(
                "group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl",
                "border border-gray-100 dark:border-gray-700",
                "transition-all duration-300 ease-in-out",
                "p-6 md:p-8",
                "max-w-full w-full md:max-w-2xl mx-auto",
                "animate-in fade-in slide-in-from-bottom-4 duration-700"
            )}
        >
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-semibold">
                                {contact.firstName[0]}{contact.lastName[0]}
                            </div>
                            {contact.status === "new" && (
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 truncate">
                                {contact.firstName} {contact.lastName}
                            </h3>
                            <span className={cn(
                                "inline-flex items-center px-3 py-1 mt-1 text-xs font-medium rounded-full",
                                "shadow-sm transition-colors duration-200",
                                {
                                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100": contact.status === "new",
                                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100": contact.status === "in-progress",
                                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100": contact.status === "completed",
                                    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100": contact.status === "archived"
                                }
                            )}>
                                {contact.status === "new" && (<><Star size={12} className="mr-1" /> New Contact</>)}
                                {contact.status === "in-progress" && (<><Send size={12} className="mr-1" /> In Progress</>)}
                                {contact.status === "completed" && (<><Check size={12} className="mr-1" /> Completed</>)}
                                {contact.status === "archived" && (<><Clock size={12} className="mr-1" /> Archived</>)}
                            </span>
                        </div>
                    </div>
                    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                    {/* Contact Information */}
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                        <a
                            href={`mailto:${contact.email}`}
                            className="flex items-center group/item hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mr-3 group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-900/50 transition-colors">
                                <Mail size={16} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="truncate">{contact.email}</span>
                        </a>
                        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                        <a
                            href={`tel:${contact.phoneNumber}`}
                            className="flex items-center group/item hover:text-green-600 dark:hover:text-green-400 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center mr-3 group-hover/item:bg-green-100 dark:group-hover/item:bg-green-900/50 transition-colors">
                                <Phone size={16} className="text-green-600 dark:text-green-400" />
                            </div>
                            <span className="truncate">{contact.phoneNumber}</span>
                        </a>
                        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center mr-3">
                                <Calendar size={16} />
                            </div>
                            <span className="truncate">
                                {contact.createdAt
                                    ? new Date(contact.createdAt).toLocaleDateString()
                                    : "N/A"}
                            </span>
                        </div>
                        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center mr-3">
                                <Clock size={16} />
                            </div>
                            <span className="truncate">
                                {contact.createdAt
                                    ? new Date(contact.createdAt).toLocaleTimeString()
                                    : "N/A"}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Status Select */}
                    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                    <select
                        className={cn(
                            "p-2 rounded-lg text-sm font-medium",
                            "border border-gray-200 dark:border-gray-700",
                            "bg-white dark:bg-gray-800",
                            "text-gray-900 dark:text-gray-100",
                            "hover:border-gray-300 dark:hover:border-gray-600",
                            "focus:outline-none focus:ring-2 focus:ring-blue-500",
                            "transition-colors"
                        )}
                        value={contact.status}
                        onChange={(e) => handleStatusChange(e.target.value, contact._id)}
                    >
                        <option value="new">New</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="archived">Archived</option>
                    </select>
                    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
                    {/* Delete Button - Desktop */}
                    <button
                        onClick={() => openModal(
                            `Are you sure you want to Delete ${contact.firstName} ${contact.lastName}?`,
                            "Delete Confirmation",
                            () => handleDelete(contact._id)
                        )}
                        className="hidden md:flex items-center px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                    >
                        <Trash2 size={18} className="mr-2" />
                        Delete
                    </button>
                </div>
            </div>
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            {/* Message Section */}
            <div className="mt-6">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Message:</h4>
                <div className="relative group">
                    <div className={cn(
                        "text-gray-600 dark:text-gray-300",
                        "bg-gray-50 dark:bg-gray-900/50",
                        "p-4 rounded-xl",
                        "border border-gray-200 dark:border-gray-700",
                        "transition-all duration-200",
                        "group-hover:border-gray-300 dark:group-hover:border-gray-600"
                    )}>
                        <p className="whitespace-pre-wrap break-words">{contact.message}</p>
                    </div>
                </div>
            </div>
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
            {/* Mobile Actions */}
            <div className="mt-6 md:hidden">
                <button
                    onClick={() => openModal(
                        `Are you sure you want to Delete ${contact.firstName} ${contact.lastName}?`,
                        "Delete Confirmation",
                        () => handleDelete(contact._id)
                    )}
                    className="w-full flex items-center justify-center px-4 py-2.5 text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-900/30 dark:hover:bg-red-900/50 rounded-lg transition-colors"
                >
                    <Trash2 size={18} className="mr-2" />
                    Delete
                </button>
            </div>
        </div>
    );
}