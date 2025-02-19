import { ChevronLeft, ChevronRight, AlertCircle, Pencil, Trash2, MapPin, } from 'lucide-react';
import { SyncLoader } from 'react-spinners';
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from '../../components/model/Modal'
import { AddUniversity } from './AddUniversity';
import useGetAllUniversities from '../../hooks/University/usegetAllUniversities';
import useDeleteUniversity from '../../hooks/University/usedeleteUniversity';
import { EditUniversity } from './EditUniversity';
import UniversityCardSkeleton from '../../components/skeleton/UniversityCardSkeleton';
import { Card, CardContent } from "../../components/ui/Card";
import SearchBar from '../../components/ui/SearchBar';
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const UniversityList = () => {
  const {
    universities,
    loading,
    error,
    pagination,
    page,
    isUniversityLoading,
    handlePageChange,
    handleSearch,
    search
  } = useGetAllUniversities();
  const { allUniversities, universityError } = useSelector((state) => state.university);
  const { isLodingDleting, handleDeleteUniversity } = useDeleteUniversity();
  const { action } = useParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [onConfirmAction, setOnConfirmAction] = useState(null);

  const openModal = (content, title, onConfirm) => {
    setModalContent(content);
    setModalTitle(title);
    setOnConfirmAction(() => onConfirm);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setOnConfirmAction(null);
  };

  const handleDelete = async (universitiesId) => {
    try {
      await handleDeleteUniversity(universitiesId);
    } catch (error) {
      console.error(`Failed to ${universitiesId} user:`, error);
    } finally {
      closeModal();
    }
  };
  if (action === "edit") {
    return <EditUniversity />;
  }
  if (action === "create") {
    return <AddUniversity />;
  }
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }

  if (action === undefined || action === null) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900">Universities</h1>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <SearchBar search={search} handleSearch={handleSearch} />
            <Link
              to="create"
              className="px-2 py-2 text-center w-full bg-[#4056B6] text-white rounded-lg hover:bg-[#5067c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4056B6] transition-all shadow-sm"
            >
              Add University
            </Link>
          </div>
        </div>
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
        {/* Search input */}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
        {error && (
          <Card className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 text-center">
            <CardContent className="flex flex-col items-center">
              <AlertCircle className="w-10 h-10 text-gray-500 mb-2" />
              <p className="text-lg text-red-600 font-medium">Error loading universities: {error}</p>
              <p className="text-sm text-gray-500">Try adjusting your search or check back later.</p>
            </CardContent>
          </Card>
        )}
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
        {/* Show "No universities" message when needed */}
        {!isUniversityLoading && !error && (!universities || universities.length === 0) && (
          <Card className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 text-center">
            <CardContent className="flex flex-col items-center">
              <AlertCircle className="w-10 h-10 text-gray-500 mb-2" />
              <p className="text-lg text-gray-700 font-medium">No universities available</p>
              <p className="text-sm text-gray-500">Try adjusting your search or check back later.</p>
            </CardContent>
          </Card>

        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
          {universities?.map((university) => (
            <div
              key={university._id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all hover:shadow-2xl"
            >
              <img
                src={university.media.images[0]?.url || "/default-image.jpg"} // Fallback for missing images
                alt={university.identity.name}
                className="w-full h-28 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <div className="flex items-center justify-between text-gray-500">
                  <h3 className="text-xl font-bold text-gray-900">
                    {university.identity.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} />
                    <span className="text-sm font-medium">
                      {university.location.address}
                    </span>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between border-b pb-1">
                    <span className="font-semibold">Type:</span>
                    <span>{university.sizeAndProfile.controlType}</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="font-semibold">Established:</span>
                    <span>{university.identity.founded}</span>
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <Link
                    to={`edit/${university._id}`}
                    className="p-2 bg-gray-200 text-green-600 rounded-full hover:bg-gray-300 transition-all"
                    title="Edit"
                  >
                    <Pencil size={16} />
                  </Link>
                  <button
                    className="p-2 bg-gray-200 text-red-600 rounded-full hover:bg-gray-300 transition-all"
                    title="Delete"
                    onClick={() =>
                      openModal(
                        `Are you sure you want to Delete ${university.identity.name}?`,
                        "Delete Confirmation",
                        () => handleDelete(university._id)
                      )
                    }
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */}
        </div>
        {/* Pagination Controls */}
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
        {isLodingDleting && (
          <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <SyncLoader color="#3B82F6" size={10} />
          </div>
        )}
      </div>
    );
  }
};
export default UniversityList;