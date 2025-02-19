import React, { useState } from "react";
import { Mail, Phone, Calendar, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import useGetAllContacts from "../../hooks/Contact/useGetAllContacts"; // Import the hook
import Modal from '../../components/model/Modal'
import { SyncLoader } from 'react-spinners';
import ContactCard from "../../components/ui/ContactCard";
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
import useUpdateContactStatus from "../../hooks/Contact/useUpdateContactStatus";
import useDeleteContact from "../../hooks/Contact/useDeleteContact";
const ContactForms = () => {
  const {
    contacts,
    loading,
    error,
    pagination,
    page,
    handlePageChange,
    handleSearch,
    handleStatusFilter,
    search,
    status,
  } = useGetAllContacts();
  const { fetchContactsByStatus } = useUpdateContactStatus();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [onConfirmAction, setOnConfirmAction] = useState(null);
  const { deleteContactId, isDeleting } = useDeleteContact()
  const openModal = (content, title, onConfirm) => {
    setModalContent(content);
    setModalTitle(title);
    setOnConfirmAction(() => onConfirm);
    setModalVisible(true);
  };

  const handleDelete = async (universitiesId) => {
    try {
      await deleteContactId(universitiesId);
    } catch (error) {
      // console.error(`Failed to ${universitiesId} user:`, error);
    } finally {
      closeModal();
    }
  };
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  // Handle contact status change
  const handleStatusChange = async (status, contactId) => {
    try {
      fetchContactsByStatus(status, contactId); // Refresh list after update
    } catch (err) {
      // console.error("Failed to update status:", err);
    }
  };
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  // Open modal for confirming deletion
  const closeModal = () => {
    setModalVisible(false);
    setOnConfirmAction(null);
  };
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Contact Submissions</h1>
      </div>
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
      {/* Search and Filters */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
        <select
          value={status}
          onChange={(e) => handleStatusFilter(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">All</option>
          <option value="new">New</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="archived">Archived</option>
        </select>
      </div>
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-2">
        {contacts?.length > 0 ? (
          contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} openModal={openModal} handleDelete={handleDelete} handleStatusChange={handleStatusChange} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No contacts found.</p>
        )}
      </div>
      {/* Pagination Controls */}
      {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
      <div className="mt-8 flex justify-center items-center space-x-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={!pagination.hasPrevPage}
          className={`p-2 rounded-full ${!pagination.hasPrevPage
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-purple-600 hover:bg-purple-100'
            }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
        <div className="flex space-x-2">
          {[...Array(pagination.totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md ${page === index + 1
                ? 'bg-purple-600 text-white'
                : 'text-purple-600 hover:bg-purple-100'
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={!pagination.hasNextPage}
          className={`p-2 rounded-full ${!pagination.hasNextPage
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-purple-600 hover:bg-purple-100'
            }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <Modal
        show={modalVisible}
        onClose={closeModal}
        title={modalTitle}
        onConfirm={onConfirmAction}>
        {modalContent}
      </Modal>
      {loading || isDeleting && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <SyncLoader color="#3B82F6" size={10} />
        </div>
      )}
    </div>
  );
};
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default ContactForms;
